import { styled } from "../../utils/ReactLibs";

const Container = styled.div`
  height: 30px;
  background-color: ${(props) =>
    props.isDark === true ? "#ece1d496" : "#7e403b"};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

export default Container;
