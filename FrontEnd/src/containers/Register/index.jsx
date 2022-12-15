import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Create,
  SignIn,
  ActionBox,
  Error
} from "./style";

import { useTranslation } from "react-i18next";
import {  useHistory } from "react-router-dom";
import {register} from "utils/apis"

const RegisterContainer = () => {

  const { t } = useTranslation();
  const history = useHistory();
  const [error , setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    e.persist()
    if(e.target.password.value === e.target.confirmPassword.value){
      setError("")
      const user = {
        username: e.target.username.value,
        password: e.target.password.value,
        email: e.target.email.value
      }
      try {
        const res = await register(user);
        console.log("message",res)
        res?.status === 201 ? history.push("/login", { data: user }) : setError(`${t(res?.response?.data?.message)}`)
      } catch (err) {
      }
    }else{
      setError(t("password_is_not_equal_confirm_Password_key"))
      return;
    }
  }

  return (
    <Container>
      <Wrapper>
          <Title>{t("create_an_account_key")}</Title>
          <Form onSubmit={handleSubmit}>
              <Input placeholder={t("name_key")}/>
              <Input placeholder={t("last_name_key")}/>
              <Input name="username" placeholder={t("username_key")} required/>
              <Input name="email" placeholder={t("email_key")} required/>
              <Input type="password" name="password" placeholder={t("password_key")} required/>
              <Input type="password" name="confirmPassword" placeholder={t("confirm_password_key")} required/>
              {error ? <Error>{error}</Error> : ""}
              <ActionBox>
                <Create type="submit">{t("create_key")}</Create>
                <SignIn onClick={() => history.push("/login" , { data: "SignIn from Register" })}>{t("sign_in_key")}</SignIn>
              </ActionBox>
          </Form>
      </Wrapper>
    </Container>
  );
}

export default RegisterContainer