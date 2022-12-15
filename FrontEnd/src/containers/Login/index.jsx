import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "utils/apis";
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
import { useTranslation } from "react-i18next";
import { loginFailure, loginStart, loginSuccess } from "store/userReducer";

const LoginContainer = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const history = useHistory();
  const { t } = useTranslation();

  const handleLogin = async (e) => {
    e.preventDefault();
    e.persist()
    dispatch(loginStart());
    const user = {
      username,
      password,
    }
    try {
      const res = await login(user);
      if (res.status === 200) {
        dispatch(loginSuccess(res.data));
        history.location.state === undefined ? history.goBack() : history.push("/");
      }
    } catch (err) {
      console.log("Error: ", err);
      dispatch(loginFailure());
    }
  };


  return (
    <Container>
      <Wrapper>
        <Title>{t("sign_in_key")}</Title>
        <Form>
          <Input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder={t("username_key")}
          />
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t("password_key")}
          />
          <Button onClick={handleLogin} disabled={isFetching}>
            {isFetching ? t("loading_key") : t("login_key")}
          </Button>
          {error ? <Error> {t("a_username_or_password_is_wrong_key")}</Error> : ""}
          <LinkItem>{t("do_not_you_remember_the_password_key")}</LinkItem>

          <LinkItem onClick={() => history.push("/register")}>
            {t("create_a_new_account_key")}
          </LinkItem>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LoginContainer;
