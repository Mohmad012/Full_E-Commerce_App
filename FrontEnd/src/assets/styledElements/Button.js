import { styled } from "utils/ReactLibs";

const Button = (pos, addWidth) => {
  return styled.button`
    margin: ${pos === "cnt" ? " 0 auto" : 0};
    border: none;
    padding: 10px;
    color: gray;
    cursor: pointer;
    font-weight: 600;
    width: ${addWidth === "addWidth" ? "150px" : "auto"};
    height: 50px;
    border: 2px solid #b96f7a;
    font-family: "Cinzel", serif;
    font-size: 16px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 0;
    transition: 0.8s;
    background-color: #eee;

    &:before,
    &:after {
      position: absolute;
      background: #eee;
      z-index: -1;
      transition: 0.3s;
      content: "";
    }

    &:before {
      height: 50px;
      width: 92%;
    }

    &:after {
      width: 103%;
      height: 30px;
    }

    .noselect {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    &:hover::before {
      width: 0px;
      background: #4a2f26;
    }

    &:hover::after {
      height: 0px;
      background: #4a2f26;
    }

    &:hover {
      background: #4a2f26;
    }
  `;
};
export default Button;
