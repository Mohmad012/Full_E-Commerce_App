import Layout from "layouts";
import HomeContainer from "containers/Home";
import Announcement from "components/Announcement";
import { useState } from "react";

const Home = () => {
  const [textDebounce, setTextDebounce] = useState("");

  const Debounce = (callBack, delay = 500) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        callBack(...args);
      }, delay);
    };
  };

  const updateDebounce = Debounce((text) => setTextDebounce(text));

  const handleInputDebounce = (e) => {
    updateDebounce(e.target.value);
  };

  return (
    <>
      <Announcement />
      {/* <input type="text" onInput={handleInputDebounce} id="inputDebounce" />
      <span id="textDebounce">{textDebounce}</span> */}
      <Layout>
        <HomeContainer />
      </Layout>
    </>
  );
};

export default Home;
