import React from "react";

import MaterialAppBar from "@material-ui/core/AppBar";

const AppBar = props => {
  return <MaterialAppBar color={"secondary"} position="static" {...props} />;
};

export default AppBar;
