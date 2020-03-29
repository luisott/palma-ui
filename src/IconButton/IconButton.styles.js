import { css } from "@emotion/core";
import { hexToRgba } from "../utils";

export const iconButtonStyles = (theme, containerColor = "primary") => ({
  base: css`
    && {
      transition: all ${theme.transitions.duration.shorter}ms
        ${theme.transitions.easing.easeIn};
    }
  `,
  filled: css`
    && {
      background-color: ${theme.palette[containerColor].main};
      color: ${theme.palette[containerColor].contrastText};

      :hover {
        background-color: ${theme.palette[containerColor].dark};
        color: ${theme.palette[containerColor].contrastText};
      }
    }
  `,
  outlined: css`
    && {
      color: ${theme.palette[containerColor].main};
      border: 1px solid ${theme.palette[containerColor].main};

      :hover {
        background-color: ${hexToRgba(
          theme.palette[containerColor].main,
          0.08
        )};
        color: ${theme.palette[containerColor].main};
      }
    }
  `,
  disabled: css`
    && {
      border: 0;
    }
  `
});
