import { css } from "@emotion/core";
import { formInputLabel } from "../styles/commonStyles";

export const textField = css`
  && label {
    position: unset;
    transform: unset;
    ${formInputLabel};
  }
`;

export const activeNonError = (theme, color) => css`
  .MuiOutlinedInput-root:hover fieldset {
    border-color: ${theme.palette[color].main};
  }
`;
