import { Link } from "react-router-dom";
import { AddShoppingCart, InfoOutlined, Clear, Done, FavoriteBorderOutlined } from "@material-ui/icons";
import {
  Wrapper,
  Container,
  Top,
  FavBtn,
  Bottom,
  Left,
  DetailsLeft,
  Buy,
  DoneBox,
  DetailsRight,
  Remove,
  Right,
  Icon,
  Contents,
  Text,
  TextBox,
  Inside,
} from "./style";

const Product = ({
  item,
  handleAddRemoveCartProd,
  handleAddRemoveFavProd,
  FavProd,
  cart,
}) => {

  const textShow = (item, target) => item[target].length > 15
    ? item[target].slice(0, 22).length === item[target].length
      ? item[target].slice(0, 22)
      : `${item[target].slice(0, 22)}...`
    : item[target]

  return (
    <Wrapper>
      <Container>
        <Link to={`/product/${item._id}`}>
          <Top loading="lazy" src={item.img} alt={item.title} />
        </Link>
        <FavBtn
          inFavProds={FavProd[item._id]}
          onClick={() => handleAddRemoveFavProd(item)}
        >
          <FavoriteBorderOutlined style={{ color: FavProd[item._id] ? "#fff" : "red" }} />
        </FavBtn>
        <Bottom className={cart[item._id] ? "clicked" : ""}>
          <Left>
            <DetailsLeft>
              <h1>{item.title.length > 9 ? `${item.title.slice(0, 7)}...` : item.title}</h1>
              <p>$ {item.price}</p>
            </DetailsLeft>
            <Buy
              inCart={cart[item._id]}
              onClick={() => handleAddRemoveCartProd(item)}
            >
              <AddShoppingCart />
            </Buy>
          </Left>
          <Right>
            <DoneBox>
              <Done />
            </DoneBox>
            <DetailsRight>
              <h1>{item.title.length > 9 ? `${item.title.slice(0, 7)}...` : item.title}</h1>
              <p>Added to your cart</p>
            </DetailsRight>
            <Remove>
              <Clear onClick={() => handleAddRemoveCartProd(item)} />
            </Remove>
          </Right>
        </Bottom>
      </Container>
      <Inside>
        <Icon>
          <InfoOutlined />
        </Icon>
        <Contents>
          <TextBox>
            Title: <Text>
              {textShow(item, "title")}
            </Text>
          </TextBox>
          <TextBox>
            Desc: <Text>
              {textShow(item, "desc")}
            </Text>
          </TextBox>
          <TextBox>
            Category: <Text>
              {textShow(item, "category")}
            </Text>
          </TextBox>
          <TextBox>
            Brand: <Text>
              {textShow(item, "brand")}
            </Text>
          </TextBox>
          <TextBox>
            Price: <Text>
              {textShow(item, "price")}
            </Text>
          </TextBox>
        </Contents>
      </Inside>
    </Wrapper>
  );
};

export default Product;