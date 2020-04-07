import { css } from "@emotion/core";
import { menuMargin } from "../styles/commonStyles";

export const marginStyle = css`
  .MuiMenu-paper {
    margin: ${menuMargin};
  }
`;

export const menu = theme => css`
  .MuiMenu-paper,
  .MuiMenu-list {
    border-radius: ${theme.shape.borderRadius}px;
  }
`;
