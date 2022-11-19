import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Announcement from "components/Announcement";
import Layout from "layouts";
import { addProduct } from "store/cartReducer";

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
  Status,
  Button,
  BoxImages,
  Img
} from "./style";
import data from "data/static.json";
import Spinner from "components/Spinner";
import { findProducts } from "utils/apis";

const ProductContainer = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const isDark = useSelector((state) => state.mode.isDark);

  const [product, setProduct] = useState({});

  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("Red");
  const [size, setSize] = useState("S");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const res = await findProducts(id)
        if (res.status === 200) {
          setProduct(res.data);
          setLoading(false);
        } else {
          setProduct(
            data[0].popularProducts.filter((item) => item._id === +id)[0]
          );
          setLoading(false);
        }
      } catch (err) {
        setProduct(
          data[0].popularProducts.filter((item) => item._id === +id)[0]
        );
        setLoading(false);
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
    <Container isDark={isDark}>
      <Layout>
        <Announcement />
        {Object.keys(product).length === 0 ? (
          !loading ? (
            <Wrapper type="no data">
              <Status isDark={isDark}>There Is No Item!!</Status>
            </Wrapper>
          ) : (
            <Wrapper type="Loading">
              <Spinner />
            </Wrapper>
          )
        ) : (
          <Wrapper>
            <ImgContainer>
              <Image loading="lazy" src={product?.img} />
            </ImgContainer>
            <InfoContainer>
              <Title isDark={isDark}>{product?.title}</Title>
              <Desc isDark={isDark}>{product?.desc}</Desc>
              <Price isDark={isDark}>$ {product?.price}</Price>

              <FilterContainer>
                <Filter>
                  <FilterTitle isDark={isDark}>Color</FilterTitle>
                  {product?.color?.map((item, key) => (
                    <FilterColor
                      isDark={isDark}
                      key={key}
                      color={item}
                      onClick={() => setColor(item)}
                    />
                  ))}
                </Filter>

                <Filter>
                  <FilterTitle isDark={isDark}>Size</FilterTitle>
                  <FilterSize
                    isDark={isDark}
                    onChange={(e) => setSize(e.target.value)}>
                    {product?.size?.map((item, key) => (
                      <FilterSizeOption key={key}>{item}</FilterSizeOption>
                    ))}
                  </FilterSize>
                </Filter>
              </FilterContainer>
              <AddContainer>
                <AmountContainer isDark={isDark}>
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
                <Button
                  pos="ltf"
                  addWidth
                  isDark={isDark}
                  onClick={handleAddToCard}>
                  ADD TO CART
                </Button>
              </AddContainer>
            </InfoContainer>
          </Wrapper>
        )}
        {product?.images?.length ?
          <BoxImages>
            {product?.images?.map((img, key) => <Img key={key} src={img} alt={key} />)}
          </BoxImages>
          : ""}
      </Layout>
    </Container>
  );
};

export default ProductContainer;
