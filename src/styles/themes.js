import { primary, secondary, danger } from "./colors";
import {
  commonBorder,
  commonShadow,
  commonBorderRadiusPx
} from "./commonStyles";

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
          borderRadius: `${commonBorderRadiusPx}px`
        }
      },
      MuiListItem: {
        minHeight: "40px",
        list: {
          minHeight: "40px"
        }
      },
      MuiMenuItem: {
        minHeight: "40px",
        list: {
          minHeight: "40px"
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
  },
  shape: {
    borderRadius: commonBorderRadiusPx
  }
};
