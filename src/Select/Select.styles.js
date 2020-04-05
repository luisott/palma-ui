import { css } from "@emotion/core";
import { commonInputHeightPx } from "../styles/commonStyles";

export const selectStyle = theme => css`
  height: ${commonInputHeightPx}px;
  .MuiSelect-select:focus {
    background-color: unset;
  }

  .MuiMenu-paper,
  .MuiMenu-list {
    border-radius: ${theme.shape.borderRadius}px;
  }
`;
