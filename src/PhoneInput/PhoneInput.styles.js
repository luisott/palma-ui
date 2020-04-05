import { css } from "@emotion/core";
import { commonBorder, inputPaddingSidesPx } from "../styles/commonStyles";

export const countryInput = css`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

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
    margin-left: -${inputPaddingSidesPx}px;
  }
  .MuiMenu-list {
    border: 0;
  }
`;
