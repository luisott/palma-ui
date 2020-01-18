import { primary, secondary, danger } from "./colors";
import {
  commonBorderRadius,
  commonBorder,
  commonShadow
} from "styles/commonStyles";

export const themes = {
  light: {
    overrides: {
      MuiMenu: {
        // Name of the rule
        paper: {
          boxShadow: commonShadow
        },
        list: {
          border: commonBorder,
          borderRadius: commonBorderRadius
        }
      }
    },
    transitions: {
      duration: {
        shorter: 200 // default
      },
      easing: {
        easeIn: "cubic-bezier(0.4,0,1,1)" // default
      }
    },
    palette: {
      primary: {
        main: primary
      },
      secondary: {
        main: secondary
      },
      error: {
        main: danger
      }
    }
  }
};
