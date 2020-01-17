import React from "react";

import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";
import { Button } from "components";
import { primary, secondary } from "styles/colors";

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
