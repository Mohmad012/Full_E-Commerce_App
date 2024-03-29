import { styled } from "utils/ReactLibs";
import { lap, mobile, smMobile, tablet } from "utils/responsive";

export const Container = styled.nav``;
export const BtnListBx = styled.div`
  ${(props) => props.type !== "list" && tablet({ display: "none !important" })};
  ${(props) => props.type !== "list" && mobile({ display: "none !important" })};
  ${(props) => props.type === "list" && lap({ display: "none !important" })};
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .darkModeIcon, .lightModeIcon{
    cursor: pointer;
    background-color: black;
    padding: 5px;
    border-radius: 50%;
  }
  ${mobile({ padding: "10px 0px" })};
`;

const CommonIcon = (isDark, type) => {
  return `
    border-radius: 50%;
    color: ${isDark === true ? "#000" : "#fff"};
    padding: 0.313rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    background-color: ${isDark === true ? "gray" : "#000"};
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }

    .MuiBadge-anchorOriginTopRightRectangle {
      right: -5px;
    }

  `
}

export const Icon = styled.div`
  ${props => CommonIcon(props.isDark)}
  ${(props) => props.type !== "list" && tablet({ display: "none" })};
  ${(props) => props.type !== "list" && mobile({ display: "none" })};
`;

export const WrapperIcon = styled.div`
  ${props => CommonIcon(props.isDark)}
  ${(props) => props.type !== "list" && tablet({ display: "none" })};
  ${(props) => props.type !== "list" && mobile({ display: "none" })};
`;

export const Left = styled.div`
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
  ${smMobile({ fontSize: "24px", marginLeft: "10px" })};
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center" })};
`;
export const IconListBtn = styled.button`
  background-color: transparent;
  border: none;
  ${lap({ display: "none" })};
  ${mobile({ marginRight: "0.5rem" })};
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

export const DropDownBx = styled.div`
  .iconMenuBtn,.iconOthersBtn{
    position: relative;
    &:before {
      content: '';
      border-width: 10px;
      border-style: solid;
      border-color: transparent transparent #898989 transparent;
      position: absolute;
      bottom: 0rem;
      left: 0.9375rem; 
      transition: all 0.2s;
      opacity:${(props) => props.showMenu ? "1" : "0"};
      z-index:${(props) => props.showMenu ? "10" : "-1"};
    }
    ul {
      list-style: none;
      padding-left: 0;
      -webkit-transition: all 0.8s;
      transition: all 0.2s;
      background-color: #898989;
      padding: 10px 0px;
      display: block;
      position: absolute;
      top: 2.9rem;
      right: 0.6rem;
      width: 10rem;
      border-radius: 4px;
      text-align: right;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      opacity:${(props) => props.showMenu ? "1" : "0"};
      z-index:${(props) => props.showMenu ? "10" : "-1"};
  
      li {
        display: inline-block;
        transition: background-color 0.2s, color 0.2s;
        position: relative;
        padding-right: 10px;
        div{
          list-style: none;
          padding-left: 0;
          -webkit-transition: all 0.8s;
          transition: all 0.2s;
          background-color: #afafaf;
          
          display: block;
          position: absolute;
          top: 1.5rem;
          right: 0.6rem;
          width: 9rem;
          border-radius: 4px;
          text-align: right;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          opacity:0;
          z-index:-1;
          span{
            display: block;
            transition: background-color 0.2s, color 0.2s;
            position: relative;
            padding: 10px 0px;
            padding-right: 10px;
            color:#000;
            &:hover {
              color:#898989;
              background-color: #15202b;
            }
          }
        }
        &:hover {
          color:#898989;
          background-color: #15202b;
        }
      }
    }
  }
  .iconMenuBtn{
    ${lap({ display: "none" })};
    ${tablet({ display: "block" })};
    ${mobile({ display: "block" })};
  }
  .iconOthersBtn{
    ${lap({ display: "block" })};
    ${tablet({ display: "none" })};
    ${mobile({ display: "none" })};
  }
`;
