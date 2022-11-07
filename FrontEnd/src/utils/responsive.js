import { css } from "./ReactLibs";

// and (max-width: 1024px)
export const lap = (props) => {
  return css`
    @media only screen and (min-width: 768px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (min-width: 381px) and (max-width: 767px) {
      ${props}
    }
  `;
};

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

export const smMobile = (props) => {
  return css`
    @media only screen and (max-width: 330px) {
      ${props}
    }
  `;
};
