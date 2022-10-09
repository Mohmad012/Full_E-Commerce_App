import { useSelector } from "react-redux";
import Container from "./style";

const Announcement = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  return (
    <Container isDark={isDark}>
      Super Deal!Free Shipping on Orders Over$50
    </Container>
  );
};
export default Announcement;
