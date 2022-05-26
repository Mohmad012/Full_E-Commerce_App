import Product from "./Product";

import {Container} from "./style";
import data from"../../data/static.json";

const Products = () => {
  return(
    <Container>
      {data[0]?.popularProducts?.map(item => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
};
export default Products;



          