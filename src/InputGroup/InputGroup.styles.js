import { css } from "@emotion/core";
import {
  commonInputHeightPx,
  commonBorderRadiusPx,
  commonBorder
} from "../styles/commonStyles";
import { lightestGrey } from "../styles/colors";

export const container = css`
  display: flex;
  flex-direction: column;
`;
export const childrenWrapper = css`
  display: flex;
  height: ${commonInputHeightPx}px;
`;

export const childContainer = theme => css`
  height: 100%;
  display: flex;
  align-items: center;
  border: ${commonBorder};
  transition: border-color ${theme.transitions.duration.shorter}ms
    ${theme.transitions.easing.easeIn};
  :hover,
  :active,
  :focus,
  :focus-within {
    border-color: ${theme.palette.secondary.main};
  }

  &:not(:first-of-type) {
    border-left-color: transparent;
    margin-left: -1px;
    :hover,
    :active,
    :focus,
    :focus-within {
      border-left-color: ${theme.palette.secondary.main};
    }
  }
  &:last-of-type {
    border-top-right-radius: ${commonBorderRadiusPx}px;
    border-bottom-right-radius: ${commonBorderRadiusPx}px;
  }
  &:first-of-type {
    border-top-left-radius: ${commonBorderRadiusPx}px;
    border-bottom-left-radius: ${commonBorderRadiusPx}px;
  }
`;

export const childContainerDisabled = css`
  :hover,
  :active,
  :focus,
  :focus-within {
    border-color: ${lightestGrey};
  }

  &:not(:first-of-type) {
    :hover,
    :active,
    :focus,
    :focus-within {
      border-left-color: ${lightestGrey};
    }
  }
`;
