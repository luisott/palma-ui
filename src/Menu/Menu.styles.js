import { css } from "@emotion/core";

export const marginStyle = css`
  margin: 7px 0;
`;

export const menu = theme => css`
  .MuiMenu-paper,
  .MuiMenu-list {
    border-radius: ${theme.shape.borderRadius}px;
  }
`;
