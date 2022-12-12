import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Create,
  SignIn,
  ActionBox
} from "./style";

import { useTranslation } from "react-i18next";
import {  useHistory } from "react-router-dom";

const RegisterContainer = () => {

  const { t } = useTranslation();
  const history = useHistory();

  return (
    <Container>
      <Wrapper>
          <Title>{t("create_an_account_key")}</Title>
          <Form>
              <Input placeholder={t("name_key")}/>
              <Input placeholder={t("last_name_key")}/>
              <Input placeholder={t("username_key")}/>
              <Input placeholder={t("email_key")}/>
              <Input placeholder={t("password_key")}/>
              <Input placeholder={t("confirm_password_key")} />
              <ActionBox>
                <Create>{t("create_key")}</Create>
                <SignIn onClick={() => history.push("/login")}>{t("sign_in_key")}</SignIn>
              </ActionBox>
          </Form>
      </Wrapper>
    </Container>
  );
}

export default RegisterContainer