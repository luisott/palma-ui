import { css } from "@emotion/core";
import { formInputLabel } from "../styles/commonStyles";

export const textField = (theme) => css`
  fieldset {
    transition: all ${theme.transitions.duration.shorter}ms
      ${theme.transitions.easing.easeIn};
  }

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
