import { styled } from "utils/ReactLibs";

export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

export const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${(props) =>
    props.isDark === true ? "#0c0c0c30" : "#f5fbfd"};
  &:hover ${Info} {
    opacity: 1;
  }
`;

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

export const Image = styled.img`
  height: 75%;
  max-width: 100%;
  z-index: 2;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => {
    if (props.type == "fav") {
      return props.inFavProds ? "#b91d7b" : "white";
    } else {
      return props.inCart ? "#b91d7b" : "white";
    }
  }};
  color: ${(props) => {
    if (props.type == "fav") {
      return props.inFavProds ? "#fff" : "#000";
    } else {
      return props.inCart ? "#fff" : "#000";
    }
  }};
  a,
  svg {
    color: ${(props) => {
      if (props.type == "fav") {
        return props.inFavProds ? "#fff" : "#000";
      } else {
        return props.inCart ? "#fff" : "#000";
      }
    }};
  }
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${(props) => {
      if (props.type == "fav") {
        return props.inFavProds ? "#b91d7b" : "white";
      } else {
        return props.inCart ? "#b91d7b" : "white";
      }
    }};
    transform: scale(1.1);
  }
`;
