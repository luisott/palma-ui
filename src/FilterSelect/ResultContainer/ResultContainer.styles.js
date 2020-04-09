import { css } from "@emotion/core";
import { commonBorder } from "@styles/commonStyles";
import { menuMargin } from "../../styles/commonStyles";

export const popper = theme => css`
  margin: ${menuMargin};
  border: ${commonBorder};
  border-radius: ${theme.shape.borderRadius}px;
`;

export const paper = css`
  && {
    max-height: 200px;
    overflow: scroll;
  }
`;
