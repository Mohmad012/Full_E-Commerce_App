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
} from "./style";

import data from "data/static.json";
import { useSelector } from "react-redux";

const SelectItem = ({ name, handleFilters, data, isDark }) => (
  <Select name={name} onChange={handleFilters} isDark={isDark}>
    {data.map((item, key) => (
      <>
        {key === 0 ? (
          <Option key={key} disabled>
            {item}
          </Option>
        ) : (
          <Option key={key}>{item}</Option>
        )}
      </>
    ))}
  </Select>
);

const ProductListContainer = () => {
  const location = useLocation();
  const isDark = useSelector((state) => state.mode.isDark);

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

  return (
    <Container>
      <Layout>
        <Announcement />
        <Title isDark={isDark}>{categ}</Title>
        <FilterContainer isDark={isDark}>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <SelectItem
              isDark={isDark}
              name="color"
              handleFilters={handleFilters}
              data={data[0].colors}
            />

            <SelectItem
              isDark={isDark}
              name="size"
              handleFilters={handleFilters}
              data={data[0].Sizes}
            />
          </Filter>
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
