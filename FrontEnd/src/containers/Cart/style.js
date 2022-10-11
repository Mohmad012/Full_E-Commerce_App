import { css, styled } from "utils/ReactLibs";
import { mobile, smMobile, tablet, lap } from "utils/responsive";
import Btn from "assets/styledElements/Button";

const commonTransition = () => css`
  transition: 0.3s color;
`;
const commonColor = () => css`
  color: ${(props) => (props.isDark === true ? "#8899A6" : "#000")};
`;

const commonDisplay = () => css`
  display: flex;
`;

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  min-height: 100vh;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
  ${commonTransition()}
  ${commonColor((props) => props)}
`;
const Top = styled.div`
  ${commonDisplay()}
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ flexDirection: "column", gap: "0.5rem" })};
  ${tablet({ flexDirection: "column", gap: "1.5rem" })};
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })};
`;
const TopText = styled.span`
  text-decoration: none;
  cursor: pointer;
  margin: 0px 10px;
  ${commonTransition()}
  ${commonColor((props) => props)}
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isDark === true ? "0px 0px 10px #898989" : "0px 1px 5px #000000"};

  background-color: ${(props) =>
    props.type === "filled" ? "#0000000a" : "transparent"};
  color: ${(props) =>
    props.type === "filled" ? "#000" : props.isDark === true ? "gray" : "#000"};
`;
const Bottom = styled.div`
  ${commonDisplay()}
  justify-content: space-between;
  ${mobile({ flexDirection: "column", gap: "3rem" })};
  ${tablet({ flexDirection: "column", gap: "3rem" })};
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
  border-radius: 10px;
  padding: 20px 20px 50px;
  min-height: 50vh;
  background: ${(props) =>
    props.isDark === true ? "#22303c" : "rgb(213 213 213)"};
`;
const Product = styled.div`
  ${commonDisplay()}
  justify-content: space-between;
  margin-top: 2rem;
  ${tablet({ flexDirection: "column", gap: "3rem" })};
  ${mobile({ flexDirection: "column", gap: "2rem" })};
`;
const ProductDetail = styled.div`
  flex: 2;
  ${commonDisplay()}
  ${smMobile({ flexDirection: "column" })};
`;

const RemoveBtn = styled.button`
  background-color: ${(props) =>
    props.isDark === true ? "#1b7ab1" : "#7e403b"};
  border: none;
  padding: 16px 2rem;
  cursor: pointer;
  color: rgb(255, 255, 255);
  transition: all 0.3s ease 0s;
  width: fit-content;
  &:hover {
    background-color: ${(props) =>
      props.isDark === true ? "#3ea8e5" : "rgb(201 146 141)"};
  }
`;
const Clear = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;
const Image = styled.img`
  width: 200px;
  ${smMobile({ margin: "0 auto" })};
`;

const Details = styled.div`
  padding: 20px;
  ${commonDisplay()}
  flex-direction: column;
  justify-content: space-around;

  ${smMobile({ gap: "1rem" })};
`;
const ProductName = styled.span`
  ${commonTransition()}
  ${commonColor((props) => props)}
  ${smMobile({ fontSize: "12px" })};
`;
const ProductId = styled.span`
  ${commonTransition()}
  ${commonColor((props) => props)}
  ${smMobile({ fontSize: "12px" })};
`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span`
  ${commonTransition()}
  ${commonColor((props) => props)}
  ${smMobile({ fontSize: "12px" })};
`;
const PriceDetail = styled.div`
  flex: 1;
  ${commonDisplay()}
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  ${commonTransition()}
  ${commonColor((props) => props)}
  ${commonDisplay()}
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })};
`;
const ProductPrice = styled.div`
  ${commonTransition()}
  ${commonColor((props) => props)}
  font-size: 30px;
  font-weight: 200;
`;
const Hr = styled.hr`
  background-color: ${(props) => (props.isDark === true ? "#2c2c2c" : "#eee")};
  border: none;
  height: 1px;
  ${tablet({ display: "none" })};
`;

const NoItemFuond = styled.p`
  text-align: center;
  text-transform: capitalize;
  ${commonTransition()}
  ${commonColor((props) => props)}
`;

const SummaryTitle = styled.h1`
  font-weight: 100;
  transition: 0.3s all;
  color: ${(props) => (props.isDark === true ? " #3ea8e5" : "#000")};
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  ${commonDisplay()}
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`
  transition: 0.3s all;
  color: ${(props) => (props.isDark === true ? " #3ea8e5" : "#000")};
  ${lap({ flex: 1 })};
`;
const SummaryItemPrice = styled.span`
  transition: 0.3s all;
  color: ${(props) => (props.isDark === true ? " #3ea8e5" : "#000")};
  ${lap({ fontSize: "15px", flex: 2, textAlign: "right" })};
`;
const SummaryButton = styled.button`
  ${(props) => Btn(props.pos, props.isDark)}
`;

export {
  Container,
  Wrapper,
  Title,
  Top,
  TopTexts,
  TopText,
  TopButton,
  Bottom,
  Info,
  Summary,
  Product,
  ProductDetail,
  Image,
  Details,
  RemoveBtn,
  Clear,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
  NoItemFuond,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  SummaryButton,
};
