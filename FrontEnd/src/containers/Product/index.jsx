import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import Announcement from "../../components/Announcement";
import Newsletter from "../../components/Newsletter";
import Layout from "../../layouts";
import { publicRequest } from "../../requestApi";
import { addProduct } from "../../store/cartReducer";

import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
} from "./style";

const ProductContainer = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});

  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("Red");
  const [size, setSize] = useState("S");

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    type === "dec"
      ? quantity > 1 && setQuantity((prev) => prev - 1)
      : setQuantity((prev) => prev + 1);
  };

  const handleAddToCard = () => {
    dispatch(
      addProduct({
        ...product,
        quantity,
        color,
        size,
      })
    );
  };

  return (
    <Container>
      <Layout>
        <Announcement />
        <Wrapper>
          <ImgContainer>
            <Image src={product.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>$ {product.price}</Price>

            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                {product?.color?.map((item, key) => (
                  <FilterColor
                    key={key}
                    color={item}
                    onClick={() => setColor(item)}
                  />
                ))}
              </Filter>

              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize onChange={(e) => setSize(e.target.value)}>
                  {product?.size?.map((item, key) => (
                    <FilterSizeOption key={key}>{item}</FilterSizeOption>
                  ))}
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove
                  style={{ cursor: "pointer" }}
                  onClick={() => handleQuantity("dec")}
                />
                <Amount>{quantity}</Amount>
                <Add
                  style={{ cursor: "pointer" }}
                  onClick={() => handleQuantity("inc")}
                />
              </AmountContainer>
              <Button onClick={handleAddToCard}>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
      </Layout>
    </Container>
  );
};

export default ProductContainer;
