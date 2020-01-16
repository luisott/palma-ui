import * as colors from "../../styles/colors";
import { css } from "@emotion/core";
import { BUTTON_VARIANTS } from "./Button";
import { buttonTransition } from "../../styles/transitions";
import { borderRadius } from "../../styles/commonStyles";

export const buttonStyles = (
  mainColor = colors.primaryBlue,
  mediumColor = colors.primaryBlueMedium,
  lightColor = colors.primaryBlueLight,
  darkColor = colors.primaryBlueDark
) => ({
  base: css`
    && {
      text-transform: none;
      ${borderRadius};
      ${buttonTransition};
    }
  `,
  [BUTTON_VARIANTS.text]: css`
    && {
      color: ${mainColor};
      :hover {
        background-color: ${lightColor};
      }
      :active {
        background-color: ${mediumColor};
      }
    }
  `,
  [BUTTON_VARIANTS.outlined]: css`
    && {
      color: ${mainColor};
      border-color: ${mainColor};
      :hover {
        background-color: ${lightColor};
        border-color: ${mainColor};
      }
      :active {
        background-color: ${mediumColor};
        border-color: ${mainColor};
      }
    }
  `,
  [BUTTON_VARIANTS.contained]: css`
    && {
      background-color: ${mainColor};
      :hover {
        opacity: 0.8;
        background-color: ${mainColor};
      }
      :active {
        background-color: ${darkColor};
      }
    }
  `
});

export const childStyle = loading => css`
  visibility: ${loading ? "hidden" : "visible"};
`;

export const progressIndicatorStyles = (color = colors.primaryBlue) => ({
  base: css`
    && {
      position: absolute;
    }
  `,
  [BUTTON_VARIANTS.text]: css`
    && {
      color: ${color};
    }
  `,
  [BUTTON_VARIANTS.outlined]: css`
    && {
      color: ${color};
    }
  `,
  [BUTTON_VARIANTS.contained]: css`
    && {
      color: white;
    }
  `
});
