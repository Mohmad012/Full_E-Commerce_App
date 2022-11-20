import { useState, useEffect } from "react";
import Product from "./Product";
import { Container, NoItemFuond, Title, More } from "./style";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "store/favReducer";
import { addProduct, removeProduct } from "store/cartReducer";
import Spinner from "components/Spinner";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper.scss';

const Products = ({ categ, args, fetchProducts, sortProds, index, addAll = false }) => {
  const [products, setProducts] = useState([]);

  const isDark = useSelector((state) => state.mode.isDark);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

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
        const res = await fetchProducts(...args)
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
  }, []);

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
      <Title isDark={isDark} color="" colorText="" colorInDark="transparent" index={index}>
        <h2>{categ}</h2>
        <span></span>
      </Title>
      <Container>

        {products?.length === 0 ? (
          !loading ? (
            <NoItemFuond isDark={isDark}>There is No Item !!</NoItemFuond>
          ) : <Spinner />
        ) : (
          <Swiper
            className="mySwiper"
            spaceBetween={10}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            autoplay={{ delay: 3000 }}
          >
            {
              products
                .map((item) => (
                  <SwiperSlide>

                    <Product
                      dispatch={dispatch}
                      FavProd={FavProd}
                      cart={cart}
                      handleAddRemoveFavProd={handleAddRemoveFavProd}
                      handleAddRemoveCartProd={handleAddRemoveCartProd}
                      isDark={isDark}
                      item={item}
                      index={item.id}
                    />
                  </SwiperSlide>
                ))
            }
          </Swiper>
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