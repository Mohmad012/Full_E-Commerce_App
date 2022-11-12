import { useState, useEffect } from "react";
import Product from "./Product";
import { Container, NoItemFuond, Title, More } from "./style";
import { useHistory } from "react-router-dom";
import UseRequestApi from "hooks/UseRequestApi";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "store/favReducer";
import { addProduct, removeProduct } from "store/cartReducer";
import Spinner from "components/Spinner";

const Products = ({ categ, numOfProd, sortProds, addAll = false }) => {
  const [products, setProducts] = useState([]);

  const isDark = useSelector((state) => state.mode.isDark);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const { publicRequest } = UseRequestApi();

  const FavProd = useSelector((state) => state.fav.inFavProds);
  const cart = useSelector((state) => state.cart.products);

  const handleAddRemoveFavProd = (item) => {
    const id = item._id;

    if (FavProd[id]) {
      dispatch(removeFav(id));
    } else {
      dispatch(addFav({ ...item, quantity: 1 }));
    }
  };
  const handleAddRemoveCartProd = (item) => {
    const id = item._id;

    if (cart[id]) {
      dispatch(removeProduct(id));
    } else {
      dispatch(addProduct({ ...item, quantity: 1 }));
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const res = await publicRequest.get(
          numOfProd ? `/products/findProductsByCategories?category=${categ}&numberOfProducts=${numOfProd}` : `/products/findProductsByCategories?category=${categ}`
        );
        if (res.status === 200) {
          setProducts(res.data);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    getProducts();
  }, [numOfProd]);

  useEffect(() => {
    if (
      sortProds
    ) {
      if (sortProds === "newest ") {
        setProducts((prev) =>
          [...prev].sort((a, b) => a.createdAt - b.createdAt)
        );
      } else if (sortProds === "asc") {
        setProducts((prev) =>
          [...prev].sort((a, b) => a.price - b.price)
        );
      } else {
        setProducts((prev) =>
          [...prev].sort((a, b) => b.price - a.price)
        );
      }
    }
  }, [sortProds]);


  return (
    <>
      <Title isDark={isDark} color="" colorText="" colorInDark="transparent">
        <h2>{categ}</h2>
        <span></span>
      </Title>
      <Container>

        {products?.length === 0 ? (
          !loading ? (
            <NoItemFuond isDark={isDark}>There is No Item !!</NoItemFuond>
          ) : (
            <Spinner />
          )
        ) : (
          <>
            {
              products
                .map((item) => (
                  <Product
                    dispatch={dispatch}
                    FavProd={FavProd}
                    cart={cart}
                    handleAddRemoveFavProd={handleAddRemoveFavProd}
                    handleAddRemoveCartProd={handleAddRemoveCartProd}
                    isDark={isDark}
                    item={item}
                    key={item.id}
                  />
                ))
            }
          </>
        )}

      </Container>

      {!products?.length ? (
        !loading ? (
          ""
        ) : (
          ""
        )
      ) : (

        <>
          {!addAll && <More onClick={() => history.push(`/productsForCategory/${categ}`)}>More</More>}
        </>
      )}
    </>
  );
};
export default Products;