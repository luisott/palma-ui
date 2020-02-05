import { css } from "@emotion/core";
import {
  commonBorder,
  commonBorderRadiusPx,
  boxShadowOnlyOnBottom
} from "@styles/commonStyles";

export const popper = theme =>
  css`
    width: calc(100% - 2px);
    border: ${commonBorder};
    border-color: ${theme.palette.primary.main};
    border-top: 0;
    // transition: all ${theme.transitions.duration.shorter}ms
    //   ${theme.transitions.easing.easeIn};
    && {
      margin-top: -${commonBorderRadiusPx + 2}px;
      box-shadow: ${boxShadowOnlyOnBottom};
    }
  `;
