import Slider from "./Slider"
import Categories from"./Categories";
import Products from "../../components/Products";
import Newsletter from "../../components/Newsletter";

const HomeContainer = () => {

    return (
      <>
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
      </>
    );
}

export default HomeContainer;

