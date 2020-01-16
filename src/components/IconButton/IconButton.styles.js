import { css } from "@emotion/core";

import * as colors from "../../styles/colors";

export const iconButtonStyles = css`
  && {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    :hover {
      background-color: ${colors.primaryBlueLight};
    }
    :active {
      background-color: ${colors.primaryBlueMedium};
    }
  }
`;
