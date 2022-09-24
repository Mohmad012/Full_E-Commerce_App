import { styled } from "../../utils/ReactLibs";
import { mobile, smMobile, tablet, lap } from "../../utils/responsive";

export const Container = styled.div``;
export const Wrapper = styled.div`
  padding: 20px;
`;
export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ flexDirection: "column", gap: "0.5rem" })};
  ${tablet({ flexDirection: "column", gap: "1.5rem" })};
`;
export const TopTexts = styled.div`
  ${mobile({ display: "none" })};
`;
export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", gap: "3rem" })};
  ${tablet({ flexDirection: "column", gap: "3rem" })};
`;
export const Info = styled.div`
  flex: 3;
`;
export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  padding-bottom: 50px;
  height: 50vh;
`;
export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;
export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
export const Image = styled.img`
  width: 200px;
`;
export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ProductName = styled.span`
  ${smMobile({ fontSize: "12px" })};
`;
export const ProductId = styled.span`
  ${smMobile({ fontSize: "12px" })};
`;
export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
export const ProductSize = styled.span`
  ${smMobile({ fontSize: "12px" })};
`;
export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })};
`;
export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  ${tablet({ display: "none" })};
`;

export const SummaryTitle = styled.h1`
  font-weight: 100;
`;
export const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
export const SummaryItemText = styled.span`
  ${lap({ flex: 1 })};
`;
export const SummaryItemPrice = styled.span`
  ${lap({ fontSize: "15px", flex: 2, textAlign: "right" })};
`;
export const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
