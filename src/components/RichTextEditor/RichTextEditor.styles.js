import { css } from "@emotion/core";
import {
  commonBorder,
  commonBorderRadiusPx,
  commonShadow
} from "styles/commonStyles";
import { lightestGrey } from "styles/colors";

export const richTextEditor = theme => ({
  base: css`
    border: ${commonBorder};
    border-radius: ${commonBorderRadiusPx}px;
    border-color: transparent;
    padding: 10.5px 14px;
    transition: all ${theme.transitions.duration.shorter}ms
      ${theme.transitions.easing.easeIn};
    // Not sure why but the DraftJS editor needs to have the font family reassigned
    font-family: ${theme.typography.fontFamily};
  `,
  highlight: css`
    :hover,
    :active,
    :focus {
      border-color: ${lightestGrey};
      box-shadow: ${commonShadow};
    }
  `
});
