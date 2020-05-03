import React from "react";
import { TextField as MaterialTextField } from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import PropTypes from "prop-types";
import * as styles from "./TextField.styles";

const propTypes = {
  /**
   * Needed for accessibility
   */
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
};

const defaultProps = {
  color: "primary",
};

const TextField = ({ id, label, color, disabled, error, ...rest }) => {
  const theme = useTheme();
  return (
    <MaterialTextField
      id={id}
      label={label}
      variant="outlined"
      css={[
        styles.textField(theme),
        !disabled && !error && styles.activeNonError(theme, color),
      ]}
      size={"small"}
      disabled={disabled}
      error={error}
      color={color}
      InputProps={{
        notched: false,
      }}
      SelectProps={{
        IconComponent: ExpandMoreIcon,
      }}
      {...rest}
    />
  );
};

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;
export { TextField };
