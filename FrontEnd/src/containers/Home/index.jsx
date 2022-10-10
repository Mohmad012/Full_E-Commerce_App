import Slider from "./Slider";
import Categories from "./Categories";
import Products from "components/Products";
import Newsletter from "components/Newsletter";
import { Title } from "./Style";
import { useSelector } from "react-redux";
// import { decrypt, encrypt } from "utils/encryptions";

const HomeContainer = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  // const data = encrypt(JSON.stringify({ name: "mo Gamal", age: 25 }));
  // const keyD = encrypt("id");

  // const allD = { [decrypt(keyD)]: JSON.parse(decrypt(data)) };
  // console.log("allD", allD, keyD);
  return (
    <>
      <Slider />
      <Title
        isDark={isDark}
        color="#c88b77"
        colorText=""
        colorInDark="rgb(0 0 0 / 0%)">
        <h2>Categories</h2>
        <span></span>
      </Title>
      <Categories />
      <Title isDark={isDark} color="" colorText="" colorInDark="transparent">
        <h2>Best Products</h2>
        <span></span>
      </Title>
      <Products />
      <Newsletter />
    </>
  );
};

export default HomeContainer;
