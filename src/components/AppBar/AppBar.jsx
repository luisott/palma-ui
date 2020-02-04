import React from "react";

import { AppBar as MaterialAppBar } from "@material-ui/core";

const AppBar = props => {
  return <MaterialAppBar color={"secondary"} position="static" {...props} />;
};

export { AppBar };
