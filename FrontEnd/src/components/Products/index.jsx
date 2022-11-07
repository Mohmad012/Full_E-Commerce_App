import { useState, useEffect } from "react";
import Product from "./Product";
import { Container, NoItemFuond } from "./style";
import data from "data/static.json";
import UseRequestApi from "hooks/UseRequestApi";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "store/favReducer";
import { addProduct, removeProduct } from "store/cartReducer";

const Products = ({ categ, filtersProds, sortProds }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const isDark = useSelector((state) => state.mode.isDark);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { publicRequest } = UseRequestApi();

  const FavProd = useSelector((state) => state.fav.inFavProds);
  const cart = useSelector((state) => state.cart.products);

  const handleAddRemoveFavProd = (item) => {
    const id = item._id;

    if (FavProd[id]) {
      dispatch(removeFav(id));
    } else {
      dispatch(addFav({ ...item }));
    }
  };
  const handleAddRemoveCartProd = (item) => {
    const id = item._id;

    if (cart[id]) {
      dispatch(removeProduct(id));
    } else {
      dispatch(addProduct({ ...item }));
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const res = await publicRequest.get(
          categ ? `/products?category=${categ}` : "/products"
        );
        if (res.status === 200) {
          setProducts(res.data);
          setLoading(false);
        } else {
          setProducts(data[0].popularProducts);
          setLoading(false);
        }
      } catch (err) {
        setProducts(data[0].popularProducts);
        setLoading(false);
        console.log(err);
      }
    };
    getProducts();
  }, [categ]);

  useEffect(() => {
    categ &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filtersProds).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products?.length, categ, filtersProds]);

  useEffect(() => {
    if (
      filteredProducts.some(
        (item) =>
          item.hasOwnProperty("createdAt") || item.hasOwnProperty("price")
      )
    ) {
      if (sortProds === "newest ") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.createdAt - b.createdAt)
        );
      } else if (sortProds === "asc") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.price - b.price)
        );
      } else {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => b.price - a.price)
        );
      }
    }
  }, [sortProds]);

  return (
    <Container>
      {categ ? (
        <>
          {filteredProducts.length === 0 ? (
            !loading ? (
              <NoItemFuond isDark={isDark}>There is No Item !!</NoItemFuond>
            ) : (
              <NoItemFuond isDark={isDark}>Loading...</NoItemFuond>
            )
          ) : (
            filteredProducts?.map((item) => (
              <Product
                dispatch={dispatch}
                FavProd={FavProd}
                cart={cart}
                handleAddRemoveFavProd={handleAddRemoveFavProd}
                handleAddRemoveCartProd={handleAddRemoveFavProd}
                isDark={isDark}
                item={item}
                key={item.id}
              />
            ))
          )}
        </>
      ) : (
        <>
          {products.length === 0 ? (
            !loading ? (
              <NoItemFuond isDark={isDark}>There is No Item !!</NoItemFuond>
            ) : (
              <NoItemFuond isDark={isDark}>Loading...</NoItemFuond>
            )
          ) : (
            products
              ?.slice(0, 8)
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
          )}
        </>
      )}
    </Container>
  );
};
export default Products;
