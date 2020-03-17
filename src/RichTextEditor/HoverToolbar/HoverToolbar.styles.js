import { css } from "@emotion/core";
import { commonBorderRadiusPx } from "@styles/commonStyles";

const TOOLBAR_HEIGHT_PX = 38;
export const menu = css`
  padding: 0 7px;
  height: ${TOOLBAR_HEIGHT_PX}px;
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 1;
  top: -10000px;
  left: -10000px;
  margin-top: -6px; // A little extra room so it's not right on top of the element
  opacity: 0;
  background-color: #222;
  border-radius: ${commonBorderRadiusPx}px;
  transition: opacity 0.75s;
`;

export const button = {
  base: css`
    :not(:last-of-type) {
      margin-right: 5px;
    }
    cursor: pointer;
    color: #aaa;
  `,
  active: css`
    color: white;
  `
};

export const icon = css`
  vertical-align: text-bottom;
`;
