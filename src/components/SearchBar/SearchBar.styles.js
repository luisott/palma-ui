import { css } from "@emotion/core";
import {
  commonBorder,
  commonBorderRadiusPx,
  commonShadow,
  shadowSurface
} from "@styles/commonStyles";
import { sizes } from "@types/sizes";

export const container = theme => ({
  base: css`
    display: flex;
    padding-left: 16px;
    padding-right: 8px;
    align-items: center;
    border: ${commonBorder};
    border-radius: ${commonBorderRadiusPx}px;
    height: 36px;
    transition: all ${theme.transitions.duration.shorter}ms
      ${theme.transitions.easing.easeIn};

    :hover,
    :active,
    :focus,
    :focus-within {
      box-shadow: ${commonShadow};
    }

    :focus,
    :focus-within {
      border-color: ${theme.palette.primary.main};
    }
  `,
  withSurface: css`
    box-shadow: ${shadowSurface};
  `,
  [sizes.SMALL]: css`
    height: 36px;
  `,
  [sizes.MEDIUM]: css`
    height: 48px;
  `,
  [sizes.LARGE]: css`
    height: 56px;
  `
});

export const searchIcon = {
  base: css`
    margin-right: 8px;
  `,
  [sizes.LARGE]: css`
    svg {
      width: 1.1em;
      height: 1.1em;
    }
  `
};

export const inputBase = {
  [sizes.LARGE]: css`
    && {
      font-size: 1.1rem;
    }
  `
};
