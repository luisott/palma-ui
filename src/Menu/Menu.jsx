import React from "react";
import PropTypes from "prop-types";
import { Menu as MenuMaterial } from "@material-ui/core";

import * as styles from "./Menu.styles";

const propTypes = {
  openUp: PropTypes.bool,
  horizontalAlignment: PropTypes.oneOf(["left", "right", "center"])
};

const defaultProps = {
  horizontalAlignment: "center"
};

// Exported props to be used in Select component
const getMenuProps = (openUp, horizontalAlignment = "center") => {
  const anchorProps = openUp
    ? {
        anchorOrigin: {
          vertical: "top",
          horizontal: horizontalAlignment
        },
        transformOrigin: {
          vertical: "bottom",
          horizontal: horizontalAlignment
        }
      }
    : {
        anchorOrigin: {
          vertical: "bottom",
          horizontal: horizontalAlignment
        },
        transformOrigin: {
          vertical: "top",
          horizontal: horizontalAlignment
        }
      };

  return {
    css: styles.menu,
    keepMounted: true,
    variant: "menu",
    getContentAnchorEl: null,
    ...anchorProps
  };
};

const Menu = ({ openUp, horizontalAlignment, ...rest }) => {
  return (
    <MenuMaterial {...getMenuProps(openUp, horizontalAlignment)} {...rest} />
  );
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
export { Menu, getMenuProps };
