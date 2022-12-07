import { mobile } from "utils/responsive";
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

export const More = styled.button`

  margin: 1rem auto;
  display: block;
  width: 5rem;
  padding: 0.5rem 0.1rem;
  cursor: pointer;
  a{
    text-decoration: none;
    color: #f50057;
  }

`;

export const Title = styled.div`
  background-color: ${(props) =>
    props.isDark === true ? props.colorInDark : props.color};
  padding: 10px 20px 0;
  ${(props) => props.index === 0 && `
    position: relative;
    z-index: 1000000000;
  `}
  ${(props) =>
    props.isDark === true ? "h2 {color:gray;}" : "h2 {color:#7e403b;}"};
  h2 {
    padding-bottom: 0.3rem;
    text-transform: capitalize;
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
  ${mobile({ boxShadow: "none" })};
`;