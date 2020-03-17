import { css } from "@emotion/core";
import { BUTTON_VARIANTS } from "./types";

export const buttonStyles = theme => ({
  base: css`
    && {
      text-transform: none;
      transition: all ${theme.transitions.duration.shorter}ms
        ${theme.transitions.easing.easeIn};
    }
  `,
  [BUTTON_VARIANTS.outlined]: css`
    && {
      border-color: ${theme.palette.primary.main};
      :hover {
        border-color: ${theme.palette.primary.main};
      }
      :active {
        border-color: ${theme.palette.primary.main};
      }
    }
  `
});

export const childStyle = loading => css`
  visibility: ${loading ? "hidden" : "visible"};
`;

export const progressIndicatorStyles = {
  base: css`
    && {
      position: absolute;
    }
  `,
  [BUTTON_VARIANTS.contained]: css`
    && {
      color: white;
    }
  `
};
