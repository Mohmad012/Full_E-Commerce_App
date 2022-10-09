import { Link } from "react-router-dom";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";

import { Container, Circle, Image, Info, Icon } from "./style";

const Product = ({ item, isDark }) => {
  return (
    <Container
      data-aos="fade-up"
      data-aos-delay={`${200 + item.id * 50}`}
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
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
