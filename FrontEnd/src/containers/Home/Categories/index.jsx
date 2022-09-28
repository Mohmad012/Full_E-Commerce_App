import CategoryItem from "./CategoryItem";

import { Container } from "./style";
import data from "data/static.json";

const Categories = () => {
  return (
    <Container>
      {data[0]?.categories?.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};
export default Categories;
