const Button = (pos, isDark, addWidth) => {
  return `
    margin: ${pos === "cnt" ? " 0 auto" : 0};
    border: none;
    padding: 10px;
    color: ${isDark ? "#3ea8e5" : "gray"};
    cursor: pointer;
    font-weight: 600;
    width: ${addWidth === "addWidth" ? "150px" : "auto"};
    height: 50px;
    border: 2px solid ${isDark ? "#ffffff" : "#b96f7a"};
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
    background-color: ${isDark ? "#767676" : "#eee"};

    &:before,
    &:after {
      position: absolute;
      background-color: ${isDark ? "#767676" : "#eee"};
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
      background: ${isDark ? "rgb(0 0 0 / 87%)" : "#4a2f26"};
    }

    &:hover::after {
      height: 0px;
      background: ${isDark ? "rgb(0 0 0 / 87%)" : "#4a2f26"};
    }

    &:hover {
      background: ${isDark ? "rgb(0 0 0 / 87%)" : "#4a2f26"};
      border: 2px solid ${isDark ? "gray" : "#b96f7a"};
      color: ${isDark ? "#b11b60" : "#8899A6"};
    }
  `;
};
export default Button;
