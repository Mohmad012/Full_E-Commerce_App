import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "store/apiCalls";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Error,
  LinkItem,
  Button,
} from "./style";

const LoginContainer = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, {
      username,
      password,
    });

    history.goBack();
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <Button onClick={handleLogin} disabled={isFetching}>
            {isFetching ? "Loading..." : "LOGIN"}
          </Button>
          {error ? <Error> a Username Or Password Is Wrong!!</Error> : ""}
          <LinkItem>DO NOT YOU REMEMBER THE PASSWORD?</LinkItem>

          <LinkItem onClick={() => history.push("/register")}>
            CREATEANEW ACCOUNT
          </LinkItem>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LoginContainer;
