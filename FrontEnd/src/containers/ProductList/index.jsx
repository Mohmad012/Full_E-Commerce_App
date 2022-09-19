import { useLocation } from "react-router-dom";
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
  Option,
} from "./style";
import { useState } from "react";

const ProductListContainer = () => {
  const location = useLocation();

  const categ = location.pathname.split("/")[2];
  const [filtersProds, setFiltersProds] = useState({});
  const [sortProds, setSortProds] = useState({});

  const handleFilters = (e) => {
    const { name, value } = e.target;
    setFiltersProds({
      ...filtersProds,
      [name]: value,
    });
  };

  console.log("filtersProds", filtersProds);
  return (
    <Container>
      <Layout>
        <Announcement />
        <Title>Dresses</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option disabled>Color</Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>

            <Select name="size" onChange={handleFilters}>
              <Option disabled>Size</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={(e) => setSortProds(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products
          categ={categ}
          filtersProds={filtersProds}
          sortProds={sortProds}
        />
        <Newsletter />
      </Layout>
    </Container>
  );
};

export default ProductListContainer;
