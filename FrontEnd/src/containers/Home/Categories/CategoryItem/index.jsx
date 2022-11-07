import { Link } from "react-router-dom";
import { Container, Image, Info, InfoBx, Title, Button } from "./style";

const CategoryItem = ({ item, isDark }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <InfoBx>
            <Title data-aos="fade-down" data-aos-delay="200" isDark={isDark}>
              {item.title}
            </Title>
            <Button
              pos="ltf"
              addWidth
              isDark={isDark}
              data-aos="fade-up"
              data-aos-delay="250">
              <span className="noselect">SHOP NOW</span>
            </Button>
          </InfoBx>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
