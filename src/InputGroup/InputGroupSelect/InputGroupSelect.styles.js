import { css } from "@emotion/core";

export const select = css`
  .MuiSelect-root {
    height: 100%;
    display: flex;
    align-items: center;
  }

  && {
    .MuiSelect-select {
      padding-right: 20px;
    }
  }
`;
