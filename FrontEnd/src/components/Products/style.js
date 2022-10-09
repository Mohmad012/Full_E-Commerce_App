import { styled } from "../../utils/ReactLibs";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const NoItemFuond = styled.p`
  transition: 0.3s color;
  margin: 0 auto;
  color: ${(props) => (props.isDark === true ? "gray" : "#000")};
`;
