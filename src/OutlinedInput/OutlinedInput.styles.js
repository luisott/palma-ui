import { css } from "@emotion/core";

export const activeNonError = (theme, color) => css`
  && {
    :hover fieldset {
      border-color: ${theme.palette[color].main};
    }
  }
`;
