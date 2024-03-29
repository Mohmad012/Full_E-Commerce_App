import { styled } from "../../utils/ReactLibs";
import { mobile, tablet } from "../../utils/responsive";

export const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })};
  ${tablet({ flexDirection: "column" })};
  background-color: ${(props) => props.isDark === true && "#15202b"};
  color: ${(props) => props.isDark === true && "#8899A6"};
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Logo = styled.h1`
  color: #7e403b;
`;

export const Desc = styled.p`
  margin: 20px 0px;
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })};
  ${tablet({ display: "none" })};
`;
export const Title = styled.h3`
  margin-bottom: 30px;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
export const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const Payment = styled.img`
  width: 50%;
`;
