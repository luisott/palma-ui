import { css } from "@emotion/core";
import { commonBorder, commonShadow } from "../styles/commonStyles";
import { sizes } from "@types/sizes";

export const containerWrapper = (theme, color = "primary") => ({
  base: css`
    border: ${commonBorder};
    border-radius: ${theme.shape.borderRadius}px;
    transition: all ${theme.transitions.duration.shorter}ms
      ${theme.transitions.easing.easeIn};

    :hover,
    :active,
    :focus,
    :focus-within {
      box-shadow: ${commonShadow};
    }
  `,
  withBorder: css`
    :focus,
    :focus-within {
      border-color: ${theme.palette[color].main};
    }
  `,
  withSurface: css`
    box-shadow: 0px 2px 8px -2px rgba(0, 0, 0, 0.2);
  `,
  disabled: css`
    box-shadow: none;
    :hover,
    :active,
    :focus,
    :focus-within {
      box-shadow: none;
    }
  `,
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
  `,
};

export const searchIcon = {
  base: css`
    margin-right: 8px;
    display: flex;
  `,
  [sizes.LARGE]: css`
    svg {
      width: 1.1em;
      height: 1.1em;
    }
  `,
};

export const inputBase = {
  base: css`
    width: 100%;
  `,
  [sizes.LARGE]: css`
    && {
      font-size: 1.1rem;
    }
  `,
};

export const menuList = (theme) => css`
  background-color: ${theme.palette.background.paper};
  & li[data-focus="true"] {
      background-color: ${theme.palette.action.focus};
      cursor: pointer;
    },
`;

export const menuItem = css`
  && [data-focus="true"] {
    background-color: red;
    color: white;
    cursor: pointer;
  }
  && :active {
    background-color: purple;
    color: white;
  }
`;
