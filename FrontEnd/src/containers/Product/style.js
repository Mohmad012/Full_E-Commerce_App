import { styled } from "../../utils/ReactLibs";
import { mobile, tablet, lap } from "../../utils/responsive";

export const Container = styled.div``;
export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })};
  ${tablet({ padding: "10px", flexDirection: "column" })};
`;
export const ImgContainer = styled.div`
  flex: 1;
`;
export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })};
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })};
`;
export const Title = styled.h1`
  font-weight: 200;
`;
export const Desc = styled.p`
  margin: 20px 0px;
`;
export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
export const FilterContainer = styled.div`
  width: 100%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-around;
  ${mobile({ width: "100%" })};
  ${tablet({ width: "100%" })};
  ${lap({ width: "100%" })};
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;
`;
export const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;|
`;
export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  background-color: transparent;
  border: 1px solid;
`;
export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${mobile({ width: "100%" })};
  ${tablet({ width: "100%" })};
  ${lap({ width: "100%" })};
`;
export const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
`;
export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
export const Button = styled.button`
  margin: 0 auto;
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;

  height: 50px;
  border: 2px solid #b96f7a;
  font-family: "Cinzel", serif;
  font-size: 18px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
  transition: 0.8s;
  background-color: #eee;

  &:before,
  &:after {
    position: absolute;
    background: #eee;
    z-index: -1;
    transition: 0.3s;
    content: "";
  }

  &:before {
    height: 50px;
    width: 130px;
  }

  &:after {
    width: 150px;
    height: 30px;
  }

  .noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  &:hover::before {
    width: 0px;
    background: #4a2f26;
  }

  &:hover::after {
    height: 0px;
    background: #4a2f26;
  }

  &:hover {
    background: #4a2f26;
  }
`;
