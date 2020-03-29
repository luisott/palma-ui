import React from "react";
import PropTypes from "prop-types";

import { Switch } from "@material-ui/core";

import * as styles from "./Toggle.styles";
import { useTheme } from "@material-ui/core/styles";

const propTypes = {
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value: PropTypes.any.isRequired,
  /**
   * Needed for accessibility
   */
  ariaLabel: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["primary", "secondary"])
};

const defaultProps = {
  color: "primary"
};

const Toggle = ({ value, ariaLabel, color, ...rest }) => {
  const theme = useTheme();

  return (
    <Switch
      css={styles.toggleStyles(theme, color)}
      value={value}
      inputProps={{ "aria-label": ariaLabel }}
      color={"primary"}
      {...rest}
    />
  );
};

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;
export { Toggle };
