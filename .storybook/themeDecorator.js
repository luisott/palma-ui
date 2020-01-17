import React from "react";

import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";
import { themes } from "../src/styles/themes";

let theme = createMuiTheme(themes.light);
theme = responsiveFontSizes(theme);

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
