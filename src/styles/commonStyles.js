import { lightestGrey } from "./colors";
import { css } from "@emotion/core";

export const menuMargin = "6px 0";
export const commonBorder = `${lightestGrey} 1px solid`;

export const commonShadow = "0px 2px 8px 0px rgba(0,0,0,.2)";
export const shadowSurface = "0px 2px 8px -2px rgba(0, 0, 0, 0.2)";

export const inputFieldColor = "secondary";
export const inputFieldVariant = "outlined";

export const formInputLabel = css`
  margin-bottom: 8px;
  font-size: 1rem;
  && {
    font-size: 1rem;
  }
`;
