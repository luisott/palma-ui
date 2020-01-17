import { css } from "@emotion/core";
import { borderRadius } from "../../styles/commonStyles";
import { buttonTransition } from "../../styles/transitions";
import { BUTTON_VARIANTS } from "./types";

export const buttonStyles = primaryColor => ({
  base: css`
    && {
      text-transform: none;
      ${borderRadius};
      ${buttonTransition};
    }
  `,
  [BUTTON_VARIANTS.outlined]: css`
    && {
      border-color: ${primaryColor};
      :hover {
        border-color: ${primaryColor};
      }
      :active {
        border-color: ${primaryColor};
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
