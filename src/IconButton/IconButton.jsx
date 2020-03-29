import React from "react";
import { IconButton as MaterialIconButton } from "@material-ui/core";
import PropTypes from "prop-types";

import * as styles from "./IconButton.styles";
import { useTheme } from "@material-ui/core/styles";

const propTypes = {
  "aria-label": PropTypes.string.isRequired,
  type: PropTypes.oneOf(["outlined", "filled", "text"]),
  /**
   * Color to use when type is either outline or filled
   */
  containerColor: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool
};

const defaultProps = {
  containerColor: "primary",
  type: "text"
};

const IconButton = ({ type, containerColor, disabled, ...rest }) => {
  const theme = useTheme();

  return (
    <MaterialIconButton
      css={[
        styles.iconButtonStyles(theme).base,
        styles.iconButtonStyles(theme, containerColor)[type],
        disabled && styles.iconButtonStyles(theme).disabled
      ]}
      disabled={disabled}
      {...rest}
    />
  );
};

IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;
export { IconButton };
