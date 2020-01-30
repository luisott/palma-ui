import { css } from "@emotion/core";

export const menu = css`
  padding: 8px 7px 6px;
  position: absolute;
  z-index: 1;
  top: -10000px;
  left: -10000px;
  margin-top: -6px;
  opacity: 0;
  background-color: #222;
  border-radius: 4px;
  transition: opacity 0.75s;
`;

export const button = {
  base: css`
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

export const menuElement = css`
  & > * {
    display: inline-block;
  }
  & > * + * {
    margin-left: 15px;
  }
`;
