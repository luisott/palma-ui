import { css } from "@emotion/core";
import {
  commonBorder,
  commonBorderRadiusPx,
  commonShadow,
  hoverCommonShadow
} from "@styles/commonStyles";
import { SIZES } from "@types/sizes";

export const container = theme => ({
  base: css`
    display: flex;
    padding-left: 16px;
    padding-right: 16px;
    align-items: center;
    border: ${commonBorder};
    border-radius: ${commonBorderRadiusPx}px;
    box-shadow: ${commonShadow};
    height: 36px;
    transition: all ${theme.transitions.duration.shorter}ms
      ${theme.transitions.easing.easeIn};

    :hover,
    :active,
    :focus {
      box-shadow: ${hoverCommonShadow};
    }
  `,
  [SIZES.SMALL]: css`
    height: 36px;
  `,
  [SIZES.MEDIUM]: css`
    height: 48px;
  `,
  [SIZES.LARGE]: css`
    height: 56px;
  `
});

export const searchIcon = css`
  margin-right: 8px;
`;
