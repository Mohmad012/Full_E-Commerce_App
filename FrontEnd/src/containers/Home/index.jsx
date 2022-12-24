import { useEffect, useState } from "react";
import Slider from "./Slider";
import Products from "components/Products";
import { Main, Title, NoItemFuond } from "./style";
import Spinner from "components/Spinner";

import SwiperCore, { EffectCoverflow, Autoplay } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import { findAllProductsByCategories, findBestProducts, findCategories } from "utils/apis";
import Product from "components/Products/Product";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "store/favReducer";
import { addProduct, removeProduct } from "store/cartReducer";
import { useTranslation } from "react-i18next";
import { addCategories, addBestProducts } from "store/productsInfoSlice";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Autoplay]);



const HomeContainer = () => {

  const isDark = useSelector((state) => state.mode.isDark);
  const FavProd = useSelector((state) => state.fav.inFavProds);
  const cart = useSelector((state) => state.cart.products);
  const {Categories , BestProducts} = useSelector((state) => state.allProductsInfo);
  const dispatch = useDispatch();

  const [loadingAfterGetProducts, setLoadingAfterGetProducts] = useState(false);
  const [loadingAfterGetBestProducts, setLoadingAfterGetBestProducts] = useState(false);
  const [categNames, setCategNames] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    const getProducts = async () => {
      if(!Categories.length){      
        setLoadingAfterGetProducts(true);
        try {
          const res = await findCategories()
          if (res.status === 200) {
            setCategNames(res.data);
            dispatch(addCategories(res.data))
            setLoadingAfterGetProducts(false);
          }
        } catch (err) {
          setLoadingAfterGetProducts(false);
          console.log(err);
        }
      }else{
        setCategNames(Categories)
      }
    };

    const getBestProducts = async () => {
      if(!BestProducts.length){
        setLoadingAfterGetBestProducts(true);
        try {
          const res = await findBestProducts()
          console.log("res", res)
          if (res.status === 200) {
            setBestProducts(res.data);
            dispatch(addBestProducts(res.data))
            setLoadingAfterGetBestProducts(false);
          }
        } catch (err) {
          setLoadingAfterGetBestProducts(false);
          console.log(err);
        }
      }else{
        setBestProducts(BestProducts)
      }
    };

    getBestProducts()
    getProducts();
  }, []);

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

  const allProductsBycateg = () => {
    return !loadingAfterGetProducts ? categNames?.map((item, key) => <Products key={key} index={key} categ={item} args={[item]} fetchProducts={findAllProductsByCategories} />) : <Spinner />
  }

  return (
    <>
      <Slider />
      <Title isDark={isDark} color="" colorText="" type="best" colorInDark="transparent">
        <h2>{t("best_products_key")}</h2>
        <span></span>
      </Title>
      <Main>

        {loadingAfterGetBestProducts ? (
          <Spinner />
        ) : bestProducts.length ? (
          <Swiper
            effect='coverflow'
            spaceBetween={50}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}

          >
            {bestProducts?.map((item) => (
              <SwiperSlide className="item" key={item.id}>
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
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <NoItemFuond isDark={isDark}>
            {t("there_is_no_best_products_right_now_key")}
          </NoItemFuond>
        )}
      </Main>

      {allProductsBycateg()}
    </>
  );
};

export default HomeContainer;