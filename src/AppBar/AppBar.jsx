import React from "react";

import { AppBar as MaterialAppBar } from "@material-ui/core";

const AppBar = (props) => {
  return <MaterialAppBar position="static" {...props} />;
};

export { AppBar };
