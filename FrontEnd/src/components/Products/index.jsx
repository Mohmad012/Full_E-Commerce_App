import { useState, useEffect } from "react";
import Product from "./Product";
import { Container } from "./style";
import { publicRequest } from "../../requestApi";

const Products = ({ categ, filtersProds, sortProds }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          categ ? `/products?category=${categ}` : "/products"
        );
        console.log(products);
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
  }, [products?.length, categ, filtersProds]);

  useEffect(() => {
    if (sortProds === "newest ") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sortProds === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sortProds]);

  return (
    <Container>
      {categ ? (
        <>
          {filteredProducts?.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </>
      ) : (
        <>
          {products?.slice(0, 8).map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </>
      )}
    </Container>
  );
};
export default Products;
