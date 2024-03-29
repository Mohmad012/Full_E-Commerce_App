import { useState, useEffect } from "react";
import Product from "./Product";
import { Container, NoItemFuond, Title } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "store/favReducer";
import { addProduct, removeProduct } from "store/cartReducer";
import { addProducts ,addProductsForEachCategory } from "store/productsInfoSlice";

import Spinner from "components/Spinner";

import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import 'swiper/swiper.scss';

const Products = ({ categ, args, fetchProducts, sortProds, index, addAll = false }) => {
  const [products, setProducts] = useState([]);

  const isDark = useSelector((state) => state.mode.isDark);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const productsForEachCategory = useSelector((state) => state.allProductsInfo.productsForEachCategory);
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
      if(!productsForEachCategory[categ]){
        setLoading(true);
        try {
          const res = await fetchProducts(...args)
          if (res.status === 200) {
            setProducts(res.data);
            dispatch(addProductsForEachCategory(res.data))
            res.data?.forEach(product => dispatch(addProducts(product)))
            // dispatch(addProducts(res.data))
            setLoading(false);
          }
        } catch (err) {
          setLoading(false);
          console.log(err);
        }
      }else{
        setProducts(productsForEachCategory[categ]);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <Title isDark={isDark} color="" colorText="" colorInDark="transparent" index={index}>
        <h2>{t(categ)}</h2>
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
            spaceBetween={200}
            grabCursor={true}
            centeredSlides={true}
            breakpoints={{
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 3,
                // gap:50
              },
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}


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
    </>
  );
};
export default Products;