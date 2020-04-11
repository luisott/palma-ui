import { css } from "@emotion/core";

export const tabs = css`
  && {
    overflow: inherit;
    min-height: inherit;
  }

  width: 100%;

  .MuiTabs-indicator {
    background-color: white;
    height: 3px;
  }

  .MuiTabs-flexContainer {
    height: 100%;
  }
`;

export const tab = (theme) => css`
  height: 100%;

  button {
    height: 100%;
  }

  .MuiTouchRipple-root {
    transition: all ${theme.transitions.duration.shorter}ms
      ${theme.transitions.easing.easeIn};
  }

  :hover {
    .MuiTouchRipple-root {
      background-color: rgba(255, 255, 255, 0.25);
    }
  }
`;

export const menuDrawer = (theme, color) => css`
  .MuiPaper-root {
    background-color: ${theme.palette[color].main};
  }
`;
