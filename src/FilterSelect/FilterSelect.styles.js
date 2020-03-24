import { css } from "@emotion/core";
import { commonInputHeightPx } from "../styles/commonStyles";

export const container = css`
  display: flex;
  padding-left: 16px;
  padding-right: 8px;
  align-items: center;
`;

export const inputBase = css`
  width: 100%;
  height: ${commonInputHeightPx}px;
`;
