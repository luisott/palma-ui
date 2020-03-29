import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { menuDrawer } from "./AppBar.styles";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const propTypes = {
  color: PropTypes.oneOf(["primary", "secondary"])
};

const defaultProps = {
  color: "primary"
};
const AppBarMenuDrawer = ({ color, ...rest }) => {
  const theme = useTheme();
  return <Drawer css={menuDrawer(theme, color)} {...rest} />;
};

AppBarMenuDrawer.propTypes = propTypes;
AppBarMenuDrawer.defaultProps = defaultProps;
export { AppBarMenuDrawer };
