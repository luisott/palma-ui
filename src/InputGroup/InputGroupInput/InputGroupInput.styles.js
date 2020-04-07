import { css } from "@emotion/core";

export const input = css`
  // This is so the border outlined that comes with the OutlinedInput doesn't show up
  fieldset {
    visibility: hidden;
  }
`;
