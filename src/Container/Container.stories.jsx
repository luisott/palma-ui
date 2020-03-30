import React from "react";
import { CssBaseline, Typography } from "@material-ui/core";

import { Container } from "./Container";
import Readme from "./README.md";

export default {
  title: "Components/Container",
  parameters: {
    readme: {
      // Show readme before story
      content: Readme
    }
  }
};

export const container = () => (
  <React.Fragment>
    <CssBaseline />
    <Container>
      <Typography
        component="div"
        style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
      />
    </Container>
  </React.Fragment>
);

container.story = {
  parameters: {
    centered: { disable: true }
  }
};
