import { styled } from "../../../../utils/ReactLibs";
import { mobile, lap } from "../../../../utils/responsive";
import Btn from "assets/styledElements/Button";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "65vh" })};
`;

const InfoBx = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  justify-content: center;
  width: 100%;
`;

const Title = styled.h1`
  color: ${(props) => (props.isDark === true ? "#fff" : "white")};
  margin-bottom: 20px;
  font-size: 20px;
  ${lap({ textAlign: "center" })};
  margin: 1rem auto;
`;

const Button = styled.button`
  ${(props) => Btn(props.pos, props.isDark, props.addWidth)}
  width: 60%;
  margin: 0 auto;
`;

export { Button, Container, Image, Info, InfoBx, Title };
