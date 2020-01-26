import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

import Container from "./Container";

export default {
  title: "Components|Container"
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
