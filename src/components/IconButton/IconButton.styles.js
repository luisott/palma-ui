import { css } from "@emotion/core";

import * as colors from "../../styles/colors";
import { buttonTransition } from "../../styles/transitions";

export const iconButtonStyles = css`
  && {
    ${buttonTransition};
    :hover {
      background-color: ${colors.primaryBlueLight};
    }
    :active {
      background-color: ${colors.primaryBlueMedium};
    }
  }
`;
