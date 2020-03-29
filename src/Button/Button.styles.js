import { css } from "@emotion/core";
import { BUTTON_VARIANTS } from "./types";

export const buttonStyles = (theme, color = "primary") => ({
  base: css`
    && {
      text-transform: none;
      transition: all ${theme.transitions.duration.shorter}ms
        ${theme.transitions.easing.easeIn};
    }
  `,
  [BUTTON_VARIANTS.outlined]: css`
    && {
      border-color: ${theme.palette[color].main};
      :hover {
        border-color: ${theme.palette[color].main};
      }
      :active {
        border-color: ${theme.palette[color].main};
      }
    }
  `
});

export const childStyle = loading => css`
  visibility: ${loading ? "hidden" : "visible"};
`;

export const progressIndicatorStyles = (theme, color = "primary") => ({
  base: css`
    && {
      position: absolute;
    }
  `,
  [BUTTON_VARIANTS.contained]: css`
    && {
      color: ${theme.palette[color].contrastText};
    }
  `
});
