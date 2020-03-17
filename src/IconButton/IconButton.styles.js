import { css } from "@emotion/core";

export const iconButtonStyles = theme => css`
  && {
    transition: all ${theme.transitions.duration.shorter}ms
      ${theme.transitions.easing.easeIn};
  }
`;
