import { css } from "@emotion/core";
import { blackHighEmphasis } from "../../styles/colors";

export const textFieldStyles = {
  base: css`
    && label {
      //.MuiInputLabel-root
      position: unset;
      z-index: unset;
      transform: unset;
      margin-bottom: 8px;

      *.Mui-focused {
        color: ${blackHighEmphasis};
      }
    }

    && legend {
      width: 0 !important;
    }
  `
};
