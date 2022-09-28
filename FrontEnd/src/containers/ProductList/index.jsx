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

const SelectItem = ({ name, handleFilters, data }) => (
  <Select name={name} onChange={handleFilters}>
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
        <Title>{categ}</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <SelectItem
              name="color"
              handleFilters={handleFilters}
              data={data[0].colors}
            />

            <SelectItem
              name="size"
              handleFilters={handleFilters}
              data={data[0].Sizes}
            />
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
