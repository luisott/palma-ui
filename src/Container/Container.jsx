import React from "react";
import { Container as MaterialContainer, CssBaseline } from "@material-ui/core";

const Container = props => {
  return (
    <CssBaseline>
      <MaterialContainer maxWidth="md" {...props} />
    </CssBaseline>
  );
};

export { Container };
