import { useEffect, useState } from "react";
import Slider from "./Slider";
import Products from "components/Products";
import UseRequestApi from "hooks/UseRequestApi";
import Newsletter from "components/Newsletter";
import { useSelector } from "react-redux";
// import { NoItemFuond } from "./style";
import Spinner from "components/Spinner";

// import { decrypt, encrypt } from "utils/encryptions";

const HomeContainer = () => {
  // const data = encrypt(JSON.stringify({ name: "mo Gamal", age: 25 }));
  // const keyD = encrypt("id");

  // const allD = { [decrypt(keyD)]: JSON.parse(decrypt(data)) };
  // console.log("allD", allD, keyD);
  const isDark = useSelector((state) => state.mode.isDark);
  const [loading, setLoading] = useState(false);
  const [categNames, setCategNames] = useState([]);
  const { publicRequest } = UseRequestApi();


  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const res = await publicRequest.get("/products/findCategories");

        if (res.status === 200) {
          setCategNames(res.data);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    getProducts();
  }, []);


  return (
    <>
      <Slider />
      {!loading ? categNames?.map((item, key) => <Products key={key} categ={item} numOfProd={3} />) : <Spinner />}
      <Newsletter />
    </>
  );
};

export default HomeContainer;
