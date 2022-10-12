import { Link } from "react-router-dom";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";

import { Container, Circle, Image, Info, Icon } from "./style";
// import { useDispatch } from "react-redux";
import { inFavProds } from "store/favReducer";
import { useEffect } from "react";

const Product = ({
  item,
  isDark,
  handleAddRemoveFavProd,
  hasFavProd,
  dispatch,
}) => {
  console.log("hasFavProd", hasFavProd);
  // useEffect(() => {
  //   // dispatch(inFavProds(item._id));
  // }, []);
  return (
    <Container
      data-aos="fade-up"
      data-aos-delay={`${200 + item._id * 50}`}
      isDark={isDark}>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon
          type="fav"
          inFavProds={hasFavProd[item._id]}
          onClick={() => handleAddRemoveFavProd(item)}>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
