import { lightestGrey } from "./colors";
import { css } from "@emotion/core";

export const menuMargin = "6px 0";
// This is the common border in .MuiOutlinedInput so that we can use it in other components and declare it once
export const commonBorder = `${lightestGrey} 1px solid`;

// RichTextEditor and SearchBar
export const commonShadow = "0px 2px 8px 0px rgba(0,0,0,.2)";

export const formInputLabel = css`
  margin-bottom: 8px;
  font-size: 1rem;
  && {
    font-size: 1rem;
  }
`;
