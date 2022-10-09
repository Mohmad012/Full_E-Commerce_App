import { styled } from "utils/ReactLibs";
import { mobile, smMobile, tablet } from "utils/responsive";

export const Container = styled.nav`
  height: 60px;
  ${mobile({ height: "50px" })};
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })};
`;
export const Icon = styled.div`
  border-radius: 50%;
  color: ${(props) => (props.isDark === true ? "#000" : "#fff")};
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  background-color: ${(props) => (props.isDark === true ? "gray" : "#000")};
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  ${mobile({ display: "none" })};
  ${tablet({ display: "none" })};
`;

// ${tablet({ padding: "10px 0px" })};
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const WrapperIcon = styled.span`
  transition: 0.3s color;
  display: flex;
  color: ${(props) => (props.isDark === true ? "gray" : "#000")};
  ${mobile({ display: "none" })};
  ${tablet({ display: "none" })};
`;

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "10px" })};
  ${tablet({ marginLeft: "0px" })};
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  ${mobile({ width: "50px" })};
  ${tablet({ width: "100px" })};
`;
export const Center = styled.div`
  flex: 1;
  text-align: center;
  color: #7e403b;

  a {
    text-decoration: none;
  }
`;
export const Logo = styled.h1`
  transition: 0.3s color;
  color: ${(props) => (props.isDark === true ? "gray" : "#7e403b")};
  font-weight: bold;
  ${mobile({ fontSize: "24px", marginLeft: "10px" })};
  ${smMobile({ fontSize: "16px", marginLeft: "10px" })};
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })};
`;

export const MenuItemLink = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  transition: 0.3s color;
  color: ${(props) => (props.isDark === true ? "gray" : "#000")};
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
  ${smMobile({ fontSize: "10px", marginLeft: "10px" })};
  ${tablet({ fontSize: "9px", marginLeft: "9px" })};
`;
