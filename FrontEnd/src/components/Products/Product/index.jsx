import { Link } from "react-router-dom";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";

import { Container,ImageBox, Image, Info, Icon } from "./style";

const Product = ({
  item,
  isDark,
  handleAddRemoveCartProd,
  handleAddRemoveFavProd,
  FavProd,
  cart,
}) => {
  return (
    <Container
      data-aos="fade-up"
      data-aos-delay={`${200 + item._id * 50}`}
      isDark={isDark}>
      <ImageBox>
        <Image src={item.img} />
      </ImageBox>
      <Info>
        <Icon
          inCart={cart[item._id]}
          onClick={() => handleAddRemoveCartProd(item)}>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon
          type="fav"
          inFavProds={FavProd[item._id]}
          onClick={() => handleAddRemoveFavProd(item)}>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
