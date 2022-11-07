import { styled, css } from "../../utils/ReactLibs";
import { mobile } from "../../utils/responsive";

const commonTransition = () => css`
  transition: 0.3s color;
`;
const commonColor = () => css`
  color: ${(props) => (props.isDark === true ? "gray" : "#000")};
`;

export const Container = styled.div``;
export const Title = styled.h1`
  margin: 20px;
  ${commonTransition()}
  ${commonColor((props) => props)}
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${commonTransition()}
  ${commonColor((props) => props)}
`;
export const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })};
`;

export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
`;

export const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  border: 1px solid;
  background-color: ${(props) =>
    props.isDark === true ? "gray" : "transparent"};
  ${mobile({ margin: "10px 0px" })};
`;

export const Option = styled.option``;
