import { Send } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Container, Title, Desc, InputContainer, Input, Button } from "./style";

const Newsletter = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  const history = useHistory();

  return (
    <Container isDark={isDark}>
      <Title
        data-aos={`${
          history.location.pathname.includes("product") ||
          history.location.pathname.includes("products")
            ? ""
            : "fade-up"
        }`}>
        Newsletter
      </Title>
      <Desc
        data-aos={`${
          history.location.pathname.includes("product") ||
          history.location.pathname.includes("products")
            ? ""
            : "fade-up"
        }`}>
        Get timely updates from your favorite products.
      </Desc>
      <InputContainer
        data-aos={`${
          history.location.pathname.includes("product") ||
          history.location.pathname.includes("products")
            ? ""
            : "fade-up"
        }`}>
        <Input placeholder="Your email" />
        <Button isDark={isDark}>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
