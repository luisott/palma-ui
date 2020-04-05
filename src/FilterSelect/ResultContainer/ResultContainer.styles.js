import { css } from "@emotion/core";
import { commonBorder } from "@styles/commonStyles";

export const popper = theme => css`
  margin: 6px 0 6px 0;
  border: ${commonBorder};
  border-radius: ${theme.shape.borderRadius}px;
`;

export const paper = css`
  && {
    max-height: 200px;
    overflow: scroll;
    box-shadow: none;
  }
`;
