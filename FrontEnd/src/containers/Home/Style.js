import { styled } from "utils/ReactLibs";

export const Title = styled.div`
  background-color: ${(props) =>
    props.isDark === true ? props.colorInDark : props.color};
  padding: 10px 20px 0;
  ${(props) =>
    props.isDark === true ? "h2 {color:gray;}" : "h2 {color:#7e403b;}"};
  h2 {
    padding-bottom: 0.3rem;
    font-size: 30px;
    transition: 0.3s all;
    &:hover {
      & ~ span {
        width: 150px;
      }
    }
  }

  span {
    width: 70px;
    transition: 0.3s all;
    border-bottom-color: #7e403b;
    border-bottom-width: 3px;
    border-bottom-style: solid;
    display: block;
  }
`;
