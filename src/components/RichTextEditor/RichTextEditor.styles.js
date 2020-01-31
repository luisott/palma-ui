import { css } from "@emotion/core";
import { commonBorder, commonBorderRadiusPx } from "styles/commonStyles";

export const richTextEditor = theme => css`
  border: ${commonBorder};
  border-radius: ${commonBorderRadiusPx}px;
  padding: 10.5px 14px;
  transition: all ${theme.transitions.duration.shorter}ms
    ${theme.transitions.easing.easeIn};
  // Not sure why but the DraftJS editor needs to have the font family reassigned
  font-family: ${theme.typography.fontFamily}
  :hover,
  :active,
  :focus {
    border-color: ${theme.palette.grey["800"]};
  }
`;
