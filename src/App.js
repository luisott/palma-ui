import React from "react";

import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { primary, secondary } from "src/styles/colors";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: primary
    },
    secondary: {
      main: secondary
    }
  },
  status: {
    danger: "orange"
  }
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <header>
          <Button color={"primary"}>Some button text</Button>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
