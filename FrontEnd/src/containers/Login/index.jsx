import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
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

const LoginContainer = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const history = useHistory();
  const { t } = useTranslation();

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, {
      username,
      password,
    });
    !isFetching && !error && history.goBack();
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
          {t("error_key") ? <Error> {t("a_username_or_password_is_wrong_key")}</Error> : ""}
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
