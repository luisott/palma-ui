import React from "react";

import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";
import { Button } from "components";
import { themes } from "styles/themes";

let theme = createMuiTheme(themes.light);

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
