import { css } from "@emotion/core";
import {
  commonBorder,
  commonBorderRadiusPx,
  commonShadow,
  shadowSurface
} from "@styles/commonStyles";
import { sizes } from "@types/sizes";
import { colorVariations } from "@types/colorVariations";

export const containerWrapper = theme => ({
  base: css`
    border: ${commonBorder};
    border-radius: ${commonBorderRadiusPx}px;
    transition: all ${theme.transitions.duration.shorter}ms
      ${theme.transitions.easing.easeIn};

    :hover,
    :active,
    :focus,
    :focus-within {
      box-shadow: ${commonShadow};
    }
  `,
  withSurface: css`
    box-shadow: ${shadowSurface};
  `,
  [colorVariations.PRIMARY]: css`
    :focus,
    :focus-within {
      border-color: ${theme.palette.primary.main};
    }
  `,
  [colorVariations.SECONDARY]: css`
    :focus,
    :focus-within {
      border-color: ${theme.palette.secondary.main};
    }
  `,
  [colorVariations.ERROR]: css`
    :focus,
    :focus-within {
      border-color: ${theme.palette.error.main};
    }
  `,
  disabled: css`
    box-shadow: none;
    :hover,
    :active,
    :focus,
    :focus-within {
      box-shadow: none;
    }
  `
});

export const container = {
  base: css`
    display: flex;
    padding-left: 16px;
    padding-right: 8px;
    align-items: center;
    height: 36px;
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
};

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
  base: css`
    width: 100%;
  `,
  [sizes.LARGE]: css`
    font-size: 1.1rem;
  `
};
