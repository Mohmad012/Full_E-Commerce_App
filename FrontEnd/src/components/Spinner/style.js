import { styled } from "utils/ReactLibs";

const color1= "#a5a7bb";
const color2 = "#a496a4";
const color3 = "#554d73";

export const Loader = styled.div`
    width: 150px;
    height: 100vh;
    margin: 0 auto;
    padding-top: 50%;

    svg {
        width: 90%;
        fill: none;
    }

    .load {
        transform-origin: 50% 50%;
        stroke-dasharray: 570;
        stroke-width: 20px;
        &.one {
          stroke: ${color3};
          animation: load 1.5s infinite;
        }
        &.two {
          stroke: ${color2};
          animation: load 1.5s infinite;
          animation-delay: 0.1s;
        }
        &.three {
          stroke: ${color1};
          animation: load 1.5s infinite;
          animation-delay: 0.2s;
        }
      }
      
      .point {
        animation: bounce 1s infinite ease-in-out;
        &.one {
          fill: ${color1};
          animation-delay: 0s;
        }
        &.two {
          fill: ${color2};
          animation-delay: 0.1s;
        }
        &.three {
          fill: ${color3};
          animation-delay: 0.2s;
        }
      }
      
      @keyframes bounce {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-20px);
        }
      }
      @keyframes load {
        0% {
          stroke-dashoffset: 570;
        }
        50% {
          stroke-dashoffset: 530;
        }
        100% {
          stroke-dashoffset: 570;
          transform: rotate(360deg);
        }
      }
      
`