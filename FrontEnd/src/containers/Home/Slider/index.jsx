import {
  Container,
  ImgContainer,
  Image,
  NoItemFuond
} from "./style";

import SwiperCore, { Navigation } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import { useEffect, useState } from "react";
import { findSliders } from "utils/apis";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "components/Spinner";
import { addSliders } from "store/productsInfoSlice";

// install Swiper modules
SwiperCore.use([Navigation]);

const Slider = () => {

  const [sliders, setSliders] = useState([]);
  const [loadingAfterGetSliders, setLoadingAfterGetSliders] = useState(false);
  
  const isDark = useSelector((state) => state.mode.isDark);
  const allSliders = useSelector((state) => state.allProductsInfo.sliders);
  const dispatch = useDispatch();
  

  useEffect(() => {
    const getSliders = async () => {
      if(allSliders?.length){
        setSliders(allSliders)
      }else{
        setLoadingAfterGetSliders(true);
        try {
          const res = await findSliders()
          if (res.status === 200) {
            setSliders(res.data);
            dispatch(addSliders(res.data))
            setLoadingAfterGetSliders(false);
          }
        } catch (err) {
          setLoadingAfterGetSliders(false);
          console.log(err);
        }
      }
    };

    getSliders();
  }, []);

  return (
    <Container>
        {loadingAfterGetSliders ? (
          <Spinner />
        ) : sliders.length ? (
          <Swiper
            className="mySwiper"
            navigation={true}
            modules={[Navigation]}
            grabCursor={true}
            centeredSlides={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
              {sliders?.map((sliderItem, key) => (
                          <SwiperSlide key={key}>
                            <ImgContainer>
                              <Image loading="lazy" src={sliderItem} />
                            </ImgContainer>
                          </SwiperSlide>
                        ))}

          </Swiper>
        ) : (
          <NoItemFuond isDark={isDark}>
            there is no sliders right now!!
          </NoItemFuond>
        )}
    </Container>
  );
};
export default Slider;
