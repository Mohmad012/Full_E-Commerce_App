
import Announcement from "../../components/Announcement";
import Layout from "../../layouts";
import Newsletter from "../../components/Newsletter";
import Products from "../../components/Products";

import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option
} from "./style";


const SingleContainer = () => {

  return (
    <Container>
      <Layout>
        <Announcement />
        <Title>Dresses</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
              <Option disabled selected>
                Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>

            <Select>
              <Option disabled selected>
                Size
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
      </Layout>
    </Container>
  );
}

export default SingleContainer