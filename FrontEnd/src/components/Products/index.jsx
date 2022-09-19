import { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

import { Container } from "./style";
import data from "../../data/static.json";

const Products = ({ categ, filtersProds, sortProds }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          categ
            ? `http://localhost:9000/api/products?category=${categ}`
            : "http://localhost:9000/api/products"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [categ]);

  useEffect(() => {
    categ &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filtersProds).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );

    // console.log(Object.entries(filtersProds));
  }, [products?.length, categ, filtersProds]);

  return (
    <Container>
      {filteredProducts?.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};
export default Products;
