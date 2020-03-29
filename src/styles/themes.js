import { commonBorder } from "./commonStyles";

export const themes = {
  light: {
    themeName: "Light Theme",
    overrides: {
      MuiInputBase: {
        root: {
          fontSize: "1rem"
        }
      },
      MuiMenuItem: {
        root: {
          fontSize: "1rem"
        }
      },
      MuiListItem: {
        root: {
          fontSize: "1rem"
        }
      },
      MuiMenu: {
        // Name of the rule
        paper: {
          boxShadow: "none"
        },
        list: {
          border: commonBorder,
          borderRadius: `4px`
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
        main: "#0847a5"
      },
      secondary: {
        main: "#424242"
      },
      error: {
        main: "#cc0e00"
      }
      //palette.background.default
    },
    typography: {
      htmlFontSize: 14,
      fontSize: 14,
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', 'Roboto', 'Oxygen',\n" +
        "    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n" +
        "    sans-serif"
    },
    shape: {
      borderRadius: 4
    }
  }
};
