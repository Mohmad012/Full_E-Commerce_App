import { styled } from "utils/ReactLibs";

export const Wrapper = styled.div`
  width: 300px;
  height: 430px;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0;
  transform: scale(0.95);
  transition: box-shadow .3s, transform .3s;
  &:hover {
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Top = styled.img`
  height: 21.5rem;
  width: 100%;
  cursor: pointer;
`;

export const FavBtn = styled.span`
  position: absolute;
  bottom: 90px;
  left: 10px;
  background-color: #fff;
  border-radius: 50%;
  padding: 0.3rem;
  display: flex;
  cursor: pointer;
  transform: scale(0.95);
  transition: all .3s;
  background-color: ${(props) => props.inFavProds ? "#f50057" : "#fff"} ;
  &:hover {
    transform: scale(1);
  }
`;

export const Bottom = styled.div`
  width: 200%;
  height: 20%;
  transition: transform 0.5s;

  &.clicked {
    transform: translateX(-50%);
  }
  h1 {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0;
  }
`;

export const Left = styled.div`
  height: 100%;
  width: 50%;
  background: #f4f4f4;
  position: relative;
  float: left;
`;

export const DetailsLeft = styled.div`
  padding: 20px;
  float: left;
  width: calc(70% - 40px);
`;

export const Buy = styled.div`
  float: right;
  width: calc(30% - 2px);
  height: 100%;
  background: #f1f1f1;
  transition: background 0.5s;
  border-left: solid thin rgba(0, 0, 0, 0.1);
  cursor: pointer;

  svg {
    font-size: 30px;
    padding: 30px;
    color: #254053;
    transition: transform 0.5s;
  }
  &:hover {
    background: #a6cdde;
    svg {
      transform: translateY(5px);
      color: #00394b;
    }
  }
`;

export const DoneBox = styled.div`
  width: calc(30% - 2px);
  float: left;
  transition: transform 0.5s;
  border-right: solid thin rgba(255, 255, 255, 0.3);
  height: 50%;
  cursor: pointer;
  svg {
    font-size: 30px;
    padding: 30px;
    color: white;
  }
`;

export const DetailsRight = styled.div`
  padding: 20px;
  float: right;
  width: calc(70% - 40px);
`;

export const Remove = styled.div`
  width: calc(30% - 1px);
  clear: both;
  border-right: solid thin rgba(255, 255, 255, 0.3);
  height: 50%;
  background: #bc3b59;
  transition: transform 0.5s, background 0.5s;
  transform: translateY(8px);
  cursor: pointer;

  &:hover {
    background: #9b2847;
    svg {
      transform: translateY(8px);
    }
  }

  svg {
    transition: transform 0.5s;
    font-size: 30px;
    padding: 30px;
    color: white;
  }
`;

export const Right = styled.div`
  width: 50%;
  background: #a6cdde;
  color: white;
  float: right;
  height: 200%;
  overflow: hidden;

  i {
    font-size: 30px;
    padding: 30px;
    color: #254053;
    transition: transform 0.5s;
  }
  &:hover {
    background: #a6cdde;
    i {
      transform: translateY(5px);
      color: #00394b;
    }

    ${Remove} {
      transform: translateY(-115%);
    }

    ${DoneBox} {
      transform: translateY(-115%);
    }
  }
`;

export const Icon = styled.div`
  position: absolute;
  right: 85px;
  top: 85px;
  color: white;
  opacity: 1;
`;

export const Contents = styled.div`
  padding: 5%;
  opacity: 0;
  transform: scale(0.5);
  transform: translateY(-200%);
  transition: opacity 0.2s, transform 0.8s;

  h1,
  p,
  table {
    color: white;
  }
  p {
    font-size: 13px;
  }
`;
export const Text = styled.span`
  font-weight: bold;
  letter-spacing: 1px;
`
export const TextBox = styled.div`
  margin:1rem 0;
`


export const Inside = styled.div`
  z-index: 9;
  background: #92879b;
  width: 140px;
  height: 140px;
  position: absolute;
  top: -70px;
  right: -70px;
  border-radius: 0px 0px 200px 200px;
  transition: all 0.5s, border-radius 2s, top 1s;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    width: 100%;
    right: 0;
    top: 0;
    border-radius: 0;
    height: 80%;
    ${Icon} {
      opacity: 0;
      right: 15px;
      top: 15px;
    }
    ${Contents} {
      opacity: 1;
      transform: scale(1);
      transform: translateY(0);
    }
  }
`;
