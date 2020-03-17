import { css } from "@emotion/core";
import { commonBorder, commonBorderRadiusPx } from "@styles/commonStyles";

export const containerWrapper = theme => ({
  base: css`
    border: ${commonBorder};
    border-radius: ${commonBorderRadiusPx}px;
    transition: border-color ${theme.transitions.duration.shorter}ms
      ${theme.transitions.easing.easeIn};

    :hover,
    :active,
    :focus,
    :focus-within {
      border-color: ${theme.palette.secondary.main};
    }
  `,
  openResults: css`
    border-color: ${theme.palette.secondary.main};
    border-radius: ${commonBorderRadiusPx}px ${commonBorderRadiusPx}px 0 0;
  `,
  openResultsTop: css`
    border-radius: 0 0 ${commonBorderRadiusPx}px ${commonBorderRadiusPx}px;
  `
});

export const container = css`
  display: flex;
  padding-left: 16px;
  padding-right: 8px;
  align-items: center;
`;

export const inputBase = css`
  width: 100%;
  height: 40px;
`;
