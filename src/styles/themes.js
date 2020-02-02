import { primary, secondary, danger } from "./colors";
import { commonBorder, commonBorderRadiusPx } from "./commonStyles";

export const themes = {
  light: {
    overrides: {
      MuiMenu: {
        // Name of the rule
        paper: {
          boxShadow: "none"
        },
        list: {
          border: commonBorder,
          borderRadius: `${commonBorderRadiusPx}px`
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
      //palette.background.default
    },
    typography: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', 'Roboto', 'Oxygen',\n" +
        "    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n" +
        "    sans-serif"
    }
  },
  shape: {
    borderRadius: commonBorderRadiusPx
  }
};
