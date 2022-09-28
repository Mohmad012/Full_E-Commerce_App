import { styled } from "../../../../utils/ReactLibs";
import { mobile, lap } from "../../../../utils/responsive";
import Btn from "assets/styledElements/Button";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "65vh" })};
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  ${lap({ textAlign: "center" })};
`;
const Button = Btn("ltf", "addWidth");

export { Button, Container, Image, Info, Title };
