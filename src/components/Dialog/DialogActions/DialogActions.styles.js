import { css } from "@emotion/core";

export const dialogActionsStyles = {
  base: css`
    && {
      padding: 16px 24px;
    }
  `,
  mobile: css`
    && {
      flex-direction: column;

      button {
        width: 100%;
        margin-left: 0;

        & :not(:first-child) {
          margin-top: 10px;
        }
      }
    }
  `
};
