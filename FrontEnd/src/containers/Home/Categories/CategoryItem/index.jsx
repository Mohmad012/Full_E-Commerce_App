import {
  Container,
  Image,
  Info,
  Title,
  Button
} from "./style";

const CategoryItem = ({item}) => {

  return(
      <Container>
            <Image src={item.img}/>
            <Info>
              <Title data-aos="fade-down" data-aos-delay='200'>{item.title}</Title>
              <Button data-aos="fade-up" data-aos-delay='250'>

                <span className="noselect">SHOP NOW</span>
              </Button>
          </Info>
      </Container>
    );
}

export default CategoryItem;
