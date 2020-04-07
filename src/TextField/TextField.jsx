import React from "react";
import { TextField as MaterialTextField } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import PropTypes from "prop-types";
import * as styles from "./TextField.styles";

const propTypes = {
  /**
   * Needed for accessibility
   */
  id: PropTypes.string.isRequired,
  label: PropTypes.string
};

const TextField = ({ id, label, ...rest }) => {
  return (
    <MaterialTextField
      id={id}
      label={label}
      variant="outlined"
      css={styles.textFieldStyles}
      size={"small"}
      InputProps={{
        notched: false
      }}
      SelectProps={{
        IconComponent: ExpandMoreIcon
      }}
      {...rest}
    />
  );
};

TextField.propTypes = propTypes;
export { TextField };
