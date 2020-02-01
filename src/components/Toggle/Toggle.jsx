import React from "react";
import PropTypes from "prop-types";

import Switch from "@material-ui/core/Switch";

import * as styles from "./Toggle.styles";
import { useTheme } from "@material-ui/core";

const propTypes = {
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value: PropTypes.any.isRequired,
  /**
   * Needed for accessibility
   */
  ariaLabel: PropTypes.string.isRequired
};

const Toggle = ({ value, ariaLabel, ...rest }) => {
  const theme = useTheme();

  return (
    <Switch
      css={styles.toggleStyles(theme)}
      value={value}
      inputProps={{ "aria-label": ariaLabel }}
      color={"primary"}
      {...rest}
    />
  );
};

Toggle.propTypes = propTypes;
export default Toggle;
