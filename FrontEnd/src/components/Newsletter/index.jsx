import { Send } from "@material-ui/icons";
import { useSelector } from "react-redux";

import { Container, Title, Desc, InputContainer, Input, Button } from "./style";

const Newsletter = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  return (
    <Container isDark={isDark}>
      <Title data-aos="fade-up" data-aos-delay="200">
        Newsletter
      </Title>
      <Desc data-aos="fade-up" data-aos-delay="250">
        Get timely updates from your favorite products.
      </Desc>
      <InputContainer data-aos="fade-up" data-aos-delay="300">
        <Input placeholder="Your email" />
        <Button isDark={isDark}>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
