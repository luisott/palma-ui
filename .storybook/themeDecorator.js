import React from "react";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { themes } from "../src/styles";

const theme = createMuiTheme(themes.light);

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
