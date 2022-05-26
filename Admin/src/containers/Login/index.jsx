import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Link,
  Button
} from "./style";

const LoginContainer = () => {

  return (
    <Container>
      <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="username"/>
            <Input placeholder="password"/>
            <Button>LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATEANEW ACCOUNT</Link>
          </Form>
      </Wrapper>
    </Container>
  );
}

export default LoginContainer