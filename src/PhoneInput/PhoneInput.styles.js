import { css } from "@emotion/core";
import { commonBorder } from "../styles/commonStyles";

export const countryMenuItem = css`
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const menu = theme => css`
  .MuiSelect-root {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .MuiMenu-paper {
    max-height: 200px;
    max-width: 252px;
    border: ${commonBorder};
    border-radius: ${theme.shape.borderRadius}px;
  }
  .MuiMenu-list {
    border: 0;
  }
`;
