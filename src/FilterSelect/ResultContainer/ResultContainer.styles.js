import { css } from "@emotion/core";
import { commonBorder, commonBorderRadiusPx } from "@styles/commonStyles";

export const popper = css`
  margin: 6px 0;
  width: calc(100% - 2px);
  border: ${commonBorder};
  border-radius: ${commonBorderRadiusPx}px;
`;

export const paper = css`
  && {
    max-height: 200px;
    overflow: scroll;
    box-shadow: none;
  }
`;
