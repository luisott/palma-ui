import { css } from "@emotion/core";
import { commonBorder, menuMargin } from "../styles/commonStyles";

export const popper = (theme) => css`
  margin: ${menuMargin};
  border: ${commonBorder};
  border-radius: ${theme.shape.borderRadius}px;
`;

export const paper = css`
  && {
    margin: 0;
  }
`;
