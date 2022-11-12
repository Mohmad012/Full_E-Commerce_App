import { useState } from "react";

import { useLocation } from "react-router-dom";
import Announcement from "components/Announcement";
import Layout from "layouts";
import Newsletter from "components/Newsletter";
import Products from "components/Products";

import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
  ProductsBox
} from "./style";

import { useSelector } from "react-redux";

const ProductListContainer = () => {
  const location = useLocation();
  const isDark = useSelector((state) => state.mode.isDark);

  const categ = location.pathname.split("/")[2];
  const [sortProds, setSortProds] = useState({});


  return (
    <Container>
      <Layout>
        <Announcement />
        <Title isDark={isDark}>{categ}</Title>
        <FilterContainer isDark={isDark}>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select
              onChange={(e) => setSortProds(e.target.value)}
              isDark={isDark}>
              <Option value="newest">Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <ProductsBox>
          <Products
            categ={categ}
            sortProds={sortProds}
            addAll={true}
          />
        </ProductsBox>
        <Newsletter />
      </Layout>
    </Container>
  );
};

export default ProductListContainer;
