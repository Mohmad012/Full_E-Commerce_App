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
import { useSelector } from "react-redux";
import Spinner from "components/Spinner";

// install Swiper modules
SwiperCore.use([Navigation]);

const Slider = () => {

  const [sliders, setSliders] = useState([]);
  const [loadingAfterGetSliders, setLoadingAfterGetSliders] = useState(false);
  const isDark = useSelector((state) => state.mode.isDark);

  useEffect(() => {
    const getSliders = async () => {
      setLoadingAfterGetSliders(true);
      try {
        const res = await findSliders()
        if (res.status === 200) {
          setSliders(res.data);
          setLoadingAfterGetSliders(false);
        }
      } catch (err) {
        setLoadingAfterGetSliders(false);
        console.log(err);
      }
    };

    getSliders();
  }, []);

  return (
    <Container>
      <Swiper
        className="mySwiper"
        navigation={true}
        modules={[Navigation]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        grabCursor={true}
        centeredSlides={true}
      >
        {loadingAfterGetSliders ? (
          <Spinner />
        ) : sliders.length ? (
          sliders?.map((sliderItem, key) => (
            <SwiperSlide key={key}>
              <ImgContainer>
                <Image loading="lazy" src={sliderItem} />
              </ImgContainer>
            </SwiperSlide>
          ))
        ) : (
          <NoItemFuond isDark={isDark}>
            there is no sliders right now!!
          </NoItemFuond>
        )}

      </Swiper>
    </Container>
  );
};
export default Slider;
