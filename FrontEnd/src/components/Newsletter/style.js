import { styled } from "utils/ReactLibs";
import { mobile, tablet, smMobile, lap } from "utils/responsive";

export const Container = styled.div`
  height: 30vh;
  background-color: ${(props) =>
    props.isDark === true ? "#07142e" : "#7e403b"};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${smMobile({ fontSize: "60px" })};
`;

export const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })};
  ${tablet({ textAlign: "center" })};
`;

export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${tablet({ width: "90%" })};
  ${mobile({ width: "90%" })};
  ${smMobile({ width: "90%" })};
`;

export const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

export const Button = styled.button`
  flex: 1;
  ${tablet({ flex: "2" })};
  ${mobile({ flex: "2" })};
  ${smMobile({ flex: "2" })};
  border: none;
  transition: 0.9s all;
  background-color: ${(props) =>
    props.isDark === true ? "#363636" : "#7e403b"};
  color: white;
  cursor: pointer;
`;
