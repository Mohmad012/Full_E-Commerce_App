import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined
} from "@material-ui/icons"

import {
  Container,
  Circle,
  Image,
  Info,
  Icon
} from "./style";

const Product = ({item}) => {

  return(
      <Container data-aos="fade-up" data-aos-delay={`${200 + (item.id * 50)}`}>
          <Circle/>
          <Image src={item.img}/>
          <Info>
            <Icon>
              <ShoppingCartOutlined />
            </Icon>
            <Icon>
              <SearchOutlined />
            </Icon>
            <Icon>
              <FavoriteBorderOutlined />
            </Icon>
          </Info>
      </Container>
    );
}

export default Product;
