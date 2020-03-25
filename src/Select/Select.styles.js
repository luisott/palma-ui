import { css } from "@emotion/core";
import { commonInputHeightPx } from "../styles/commonStyles";

export const selectStyle = css`
  height: ${commonInputHeightPx}px;
  .MuiSelect-select:focus {
    background-color: unset;
  }
`;
