import { Link } from "react-router-dom";
import { Container, Image, Info, Title, Button } from "./style";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title data-aos="fade-down" data-aos-delay="200">
            {item.title}
          </Title>
          <Button data-aos="fade-up" data-aos-delay="250">
            <span className="noselect">SHOP NOW</span>
          </Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
