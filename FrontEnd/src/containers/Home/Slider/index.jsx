import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

import {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Button,
} from "./style";

import data from "data/static.json";
import { useSelector } from "react-redux";

const Slider = () => {
  const [slideIndex, setslideIndex] = useState(0);
  const isDark = useSelector((state) => state.mode.isDark);

  const handleClick = (direction) =>
    direction === "left"
      ? slideIndex > 0 && setslideIndex((prev) => prev - 1)
      : slideIndex < data[0]?.sliderItems?.length - 1 &&
        setslideIndex((prev) => prev + 1);
  return (
    <Container>
      <Arrow
        direction="left"
        onClick={() => handleClick("left")}
        disabled={slideIndex === 0}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex} isDark={isDark}>
        {data[0]?.sliderItems?.map((sliderItem) => (
          <Slide
            bg={isDark === true ? sliderItem.bgDark : sliderItem.bg}
            color={isDark === true ? sliderItem.colorInDark : "000"}
            key={sliderItem.id}>
            <ImgContainer>
              <Image src={sliderItem.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{sliderItem.title}</Title>
              <Desc>{sliderItem.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow
        direction="right"
        onClick={() => handleClick("right")}
        disabled={slideIndex === data[0]?.sliderItems?.length - 1}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};
export default Slider;
