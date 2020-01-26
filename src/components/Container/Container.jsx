import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import MaterialContainer from "@material-ui/core/Container";

const Container = props => {
  return (
    <CssBaseline>
      <MaterialContainer maxWidth="md" {...props} />
    </CssBaseline>
  );
};

export default Container;
