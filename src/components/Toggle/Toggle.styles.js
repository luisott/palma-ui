import { css } from "@emotion/core";

const heightPx = 26;
export const toggleStyles = theme => css`
  && {
    width: 42px;
    height: ${heightPx + 3}px;
    padding: 0;
    margin: 0 9px;

    & .MuiSwitch-switchBase {
      padding: 1px;
    }

    & .MuiSwitch-thumb {
      height: 24px;
      width: 24px;
      color: white;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2),
        0px 2px 2px rgba(0, 0, 0, 0.12), 0px 0px 2px rgba(0, 0, 0, 0.14);
    }

    & .MuiSwitch-track {
      border-radius: ${heightPx / 2}px;
      height: ${heightPx}px;
    }

    & .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track {
      opacity: 1;
    }

    & .MuiSwitch-colorPrimary.Mui-checked {
      transform: translateX(16px);
    }

    & .MuiSwitch-colorPrimary.Mui-disabled + .MuiSwitch-track {
      opacity: 0.5;
      background-color: ${theme.palette.grey["600"]};
    }

    & .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track {
      background-color: ${theme.palette.primary.main};
    }
  }
`;
