import { styled } from "utils/ReactLibs";


export const Main = styled.main`
  padding: 1rem;
  min-height: calc(100vh - 60px);
  margin-top: 2rem;

  .swiper-container {
    box-shadow: 0 0 10px #006785;
    border-radius: 10px;
    width: 100%;
    background-color: #111;
    padding-top: 50px;
    padding-bottom: 200px;

    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 300px;

      -webkit-box-reflect: below 2px linear-gradient(transparent,transparent,#0006);

      img{
        max-width: 100%;
        width: 100%;
      }
    }
  }
`;

export const Title = styled.div`
  background-color: ${(props) =>
    props.isDark === true ? props.colorInDark : props.color};
  padding: 10px 20px 0;
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
`;

export const NoItemFuond = styled.p`
  text-align: center;
  text-transform: capitalize;
  transition: 0.3s color;
  color: ${(props) => (props.isDark === true ? "#8899A6" : "#000")};
`;