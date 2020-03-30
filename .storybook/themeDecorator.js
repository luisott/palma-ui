import React from "react";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { themes } from "../src/styles";
import { css } from "@emotion/core";
import { Card, CardContent } from "../src/Card";
import { Container } from "../src/Container";

const theme = createMuiTheme(themes.light);

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <Container
      css={css`
        margin-bottom: 48px;
        margin-top: 48px;
      `}
    >
      <Card>
        <CardContent>{storyFn()}</CardContent>
      </Card>
    </Container>
  </ThemeProvider>
);

export default ThemeDecorator;
