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
          <Button variant={"contained"}>Some button text 2</Button>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
