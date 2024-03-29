import { css, styled } from "utils/ReactLibs";
import { mobile, tablet, lap, smMobile } from "utils/responsive";
import Btn from "assets/styledElements/Button";

const commonTransition = () => css`
  transition: 0.3s color;
`;
const commonColor = () => css`
  color: ${(props) => (props.isDark === true ? "gray" : "#000")};
`;

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  min-height: ${(props) =>
    props.type === "no data" || props.type === "Loading" ? "100vh" : "auto"};
  ${tablet({ padding: "10px", flexDirection: "column", textAlign: "center" })};
  ${smMobile({ textAlign: "center" })};
  ${mobile({ padding: "10px", flexDirection: "column", textAlign: "center" })};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 50vh;
`;
const Image = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "40vh" })};
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })};
`;
const Title = styled.h1`
  font-weight: 200;
  ${commonTransition()}
  ${commonColor((props) => props)}
`;
const Desc = styled.p`
  margin: 20px 0px;
  ${commonTransition()}
  ${commonColor((props) => props)}
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  ${commonTransition()}
  ${commonColor((props) => props)}
`;
const FilterContainer = styled.div`
  width: 100%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-around;
  ${mobile({ width: "100%" })};
  ${tablet({ width: "100%" })};
  ${lap({ width: "100%" })};
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  ${commonTransition()}
  ${commonColor((props) => props)}
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  background-color: ${(props) =>
    props.isDark === true ? "gray" : "transparent"};
  border: 1px solid;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${mobile({ width: "100%" })};
  ${tablet({ width: "100%" })};
  ${lap({ width: "100%" })};
`;
const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  ${commonTransition()}
  ${commonColor((props) => props)}
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Status = styled.p`
  width: 100%;
  text-align: center;
  margin: 2rem auto;
  color: ${(props) => (props.isDark === true ? "gray" : "#000")};
`;

const Button = styled.button`
  ${(props) => Btn(props.pos, props.isDark, props.addWidth)}
`;

const BoxImages = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem auto;
`;

const Img = styled.img`
  width: 13rem;
  height: 10rem;
`;

export {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  Status,
  Button,
  BoxImages,
  Img
};