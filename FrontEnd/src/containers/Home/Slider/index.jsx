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

const Slider = () => {
  const [slideIndex, setslideIndex] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const handleClick = (direction) => {
    if (direction === "left") {
      if (slideIndex > 0) {
        setslideIndex((prev) => prev - 1);
        setDisabled("");
      } else {
        setDisabled("left");
      }
    } else {
      if (slideIndex < 2) {
        setslideIndex((prev) => prev + 1);
        setDisabled("");
      } else {
        setDisabled("right");
      }
    }
  };

  return (
    <Container>
      <Arrow
        direction="left"
        onClick={() => handleClick("left")}
        disabled={disabled}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {data[0]?.sliderItems?.map((sliderItem) => (
          <Slide bg={sliderItem.bg} key={sliderItem.id}>
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
        disabled={disabled}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};
export default Slider;
