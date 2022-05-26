import Layout from "../layouts";
import HomeContainer from '../containers/Home'
import Announcement from"../components/Announcement";

const Home = () => {

  return (
    <>
        <Announcement />
        <Layout>
          <HomeContainer />
        </Layout>
    </>
  );
}

export default Home;

