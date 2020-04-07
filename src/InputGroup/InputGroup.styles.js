import { css } from "@emotion/core";
import { commonBorder } from "../styles/commonStyles";
import { lightestGrey } from "../styles/colors";

export const container = css`
  display: flex;
  flex-direction: column;
`;
export const childrenWrapper = css`
  display: flex;
`;

export const childContainer = (theme, color = "secondary") => css`
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
    border-color: ${theme.palette[color].main};
  }

  &:not(:first-of-type) {
    border-left-color: transparent;
    margin-left: -1px;
    :hover,
    :active,
    :focus,
    :focus-within {
      border-left-color: ${theme.palette[color].main};
    }
  }
  &:last-of-type {
    border-top-right-radius: ${theme.shape.borderRadius}px;
    border-bottom-right-radius: ${theme.shape.borderRadius}px;
  }
  &:first-of-type {
    border-top-left-radius: ${theme.shape.borderRadius}px;
    border-bottom-left-radius: ${theme.shape.borderRadius}px;
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
