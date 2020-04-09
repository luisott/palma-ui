import React from "react";
import PropTypes from "prop-types";

import OutlinedInputMaterial from "@material-ui/core/OutlinedInput";

import * as styles from "./OutlinedInput.styles";
import useTheme from "@material-ui/core/styles/useTheme";

const propTypes = {
  color: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
  error: PropTypes.bool
};

const defaultProps = {
  color: "primary"
};

const OutlinedInput = ({ color, disabled, error, ...rest }) => {
  const theme = useTheme();

  return (
    <OutlinedInputMaterial
      notched={false}
      margin={"dense"}
      css={!disabled && !error && styles.activeNonError(theme, color)}
      color={color}
      disabled={disabled}
      error={error}
      {...rest}
    />
  );
};

OutlinedInput.propTypes = propTypes;
OutlinedInput.defaultProps = defaultProps;
export { OutlinedInput };
