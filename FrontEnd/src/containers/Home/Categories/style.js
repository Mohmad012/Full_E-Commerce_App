import { styled } from "../../../utils/ReactLibs";
import { mobile, tablet } from "../../../utils/responsive";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

  background-color: ${(props) =>
    props.isDark === true ? "rgb(0 0 0 / 0%)" : "#c88b77"};
  ${mobile({ padding: "0px", flexDirection: "column" })};
  ${tablet({ flexDirection: "column" })};
`;
