import { css } from "@emotion/core";
import { formInputLabel } from "../styles/commonStyles";

export const textFieldStyles = css`
  && label {
    position: unset;
    z-index: unset;
    transform: unset;
    ${formInputLabel};
  }

  && legend {
    width: 0 !important;
  }
`;
