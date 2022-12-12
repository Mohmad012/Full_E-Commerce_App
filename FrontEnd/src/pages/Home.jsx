import {lazy , Suspense} from "react"
import Spinner from "components/Spinner";

const Layout = lazy(() => import('layouts'));
const HomeContainer = lazy(() => import('containers/Home'));
const Announcement = lazy(() => import('components/Announcement'));

const Home = () => {

  return (
    <Suspense fallback={<Spinner />}>
      <Announcement />
      <Layout>
        <HomeContainer />
      </Layout>
    </Suspense>
  );
};

export default Home;
