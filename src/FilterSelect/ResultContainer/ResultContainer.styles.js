import { css } from "@emotion/core";
import { commonBorder, commonBorderRadiusPx } from "@styles/commonStyles";

export const popper = theme => ({
  base: css`
    width: calc(100% - 2px);
    border: ${commonBorder};
    border-color: ${theme.palette.secondary.main};
    border-top: 0;
    border-radius: 0 0 ${commonBorderRadiusPx}px ${commonBorderRadiusPx}px;
  `,
  openTop: css`
    border-bottom: 0;
    border-radius: ${commonBorderRadiusPx}px ${commonBorderRadiusPx}px 0 0;
  `
});

export const paper = {
  base: css`
    && {
      max-height: 200px;
      overflow: scroll;
      box-shadow: none;
      border-radius: 0 0 ${commonBorderRadiusPx}px ${commonBorderRadiusPx}px;
    }
  `,
  openTop: css`
    && {
      border-radius: ${commonBorderRadiusPx}px ${commonBorderRadiusPx}px 0 0;
    }
  `
};
