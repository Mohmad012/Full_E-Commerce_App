import CategoryItem from "./CategoryItem";

import { Container } from "./style";
import data from "data/static.json";
import { useSelector } from "react-redux";

const Categories = () => {
  const isDark = useSelector((state) => state.mode.isDark);

  return (
    <Container isDark={isDark}>
      {data[0]?.categories?.map((item) => (
        <CategoryItem item={item} key={item.id} isDark={isDark} />
      ))}
    </Container>
  );
};
export default Categories;
