import Layout from "layouts";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Container, Title } from "./style";
const SuccessContainer = () => {
  const location = useLocation();
  const isDark = useSelector((state) => state.mode.isDark);
  return (
    <Layout>
      <Container>
        <Title isDark={isDark}>Complete Checkout Payment Successfully</Title>
      </Container>
    </Layout>
  );
};

export default SuccessContainer;
