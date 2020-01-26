import React from "react";
import PropTypes from "prop-types";

import MaterialAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const props = {
  someBoolean: PropTypes.bool
};

const defaultProps = {};

const AppBar = ({ children, ...props }) => {
  return (
    <MaterialAppBar color={"secondary"} position="static" {...props}>
      <Toolbar variant={"dense"}>{children}</Toolbar>
    </MaterialAppBar>
  );
};

AppBar.props = props;
AppBar.defaultProps = defaultProps;
export default AppBar;
