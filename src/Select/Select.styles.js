import { css } from "@emotion/core";
import { menuMargin } from "../styles/commonStyles";

export const selectStyle = theme => css`
  .MuiSelect-select:focus {
    background-color: unset;
  }
  .MuiMenu-paper {
    margin: ${menuMargin};
  }

  .MuiMenu-paper,
  .MuiMenu-list {
    border-radius: ${theme.shape.borderRadius}px;
  }
`;
