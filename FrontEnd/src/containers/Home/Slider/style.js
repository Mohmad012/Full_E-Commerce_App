import { styled } from "../../../utils/ReactLibs";
import { mobile, tablet, lap } from "../../../utils/responsive";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })};
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.5s;
  &:hover {
    opacity: ${(props) => (props.disabled === true ? "0.5" : "1")};
  }
  margin: auto;
  z-index: 2;
  cursor: ${(props) => props.disabled === true && "not-allowed"};
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  background-color: ${(props) =>
    props.isDark === true ? "#0000000a" : "transparent"};
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  color: #${(props) => props.color};
  button {
    color: #${(props) => props.color};
  }
`;

export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  align-items: center;
  ${lap({ display: "flex" })};
`;
export const Image = styled.img`
  height: 80%;
  margin-left: 75px;
  margin-top: 40px;
  ${tablet({ width: "95%", marginLeft: "10px" })};
  ${lap({ width: "auto", margin: "40px auto" })};
`;

export const InfoContainer = styled.div`
  flex: 2;
  padding: 50px;
  ${tablet({ display: "none" })};
`;

export const Title = styled.h1`
  font-size: 70px;
`;
export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  padding-right: 10px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: none;
  transition: 0.2s all;
  &:active {
    box-shadow: 0px 0px 10px red;
  }
  box-shadow: 0px 0px 10px;
`;
