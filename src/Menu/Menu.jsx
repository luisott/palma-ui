import React from "react";
import PropTypes from "prop-types";
import { Menu as MenuMaterial } from "@material-ui/core";
import * as styles from "./Menu.styles";

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
    keepMounted: true,
    variant: "menu",
    getContentAnchorEl: null,
    ...anchorProps
  };
};

const propTypes = {
  openUp: PropTypes.bool,
  horizontalAlignment: PropTypes.oneOf(["left", "right", "center"]),
  /**
   * Adds margin on top and bottom
   * for extra space between the trigger element and the menu (e.g. for a menu button)
   */
  addMargin: PropTypes.bool
};

const defaultProps = {
  horizontalAlignment: "center"
};

const Menu = ({ openUp, horizontalAlignment, addMargin, ...rest }) => {
  return (
    <MenuMaterial
      {...getMenuProps(openUp, horizontalAlignment)}
      css={addMargin && styles.marginStyle}
      {...rest}
    />
  );
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
export { Menu, getMenuProps };
