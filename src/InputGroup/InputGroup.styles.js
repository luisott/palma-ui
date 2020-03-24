import { css } from "@emotion/core";
import {
  commonInputHeightPx,
  commonBorderRadiusPx,
  commonBorder
} from "../styles/commonStyles";
import { lightestGrey } from "../styles/colors";

export const container = css`
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

  &:not(:first-child) {
    border-left-color: transparent;
    margin-left: -1px;
    :hover,
    :active,
    :focus,
    :focus-within {
      border-left-color: ${theme.palette.secondary.main};
    }
  }
  &:last-child {
    border-top-right-radius: ${commonBorderRadiusPx}px;
    border-bottom-right-radius: ${commonBorderRadiusPx}px;
  }
  &:first-child {
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

  &:not(:first-child) {
    :hover,
    :active,
    :focus,
    :focus-within {
      border-left-color: ${lightestGrey};
    }
  }
`;
