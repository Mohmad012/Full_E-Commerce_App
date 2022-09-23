import { styled } from "../../utils/ReactLibs";
import { mobile, smMobile, tablet } from "../../utils/responsive";

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
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
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
  ${mobile({ width: "50px" })};
  ${tablet({ width: "100px" })};
`;
export const Center = styled.div`
  flex: 1;
  text-align: center;
  color: #7e403b;
`;
export const Logo = styled.h1`
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

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
  ${smMobile({ fontSize: "10px", marginLeft: "10px" })};
  ${tablet({ fontSize: "9px", marginLeft: "9px" })};
`;
