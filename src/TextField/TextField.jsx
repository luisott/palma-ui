import React from "react";
import { TextField as MaterialTextField } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import PropTypes from "prop-types";
import * as styles from "./TextField.styles";
import { inputFieldColor, inputFieldVariant } from "@styles/commonStyles";

const propTypes = {
  /**
   * Needed for accessibility
   */
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

const TextField = ({ id, label, ...rest }) => {
  return (
    <MaterialTextField
      id={id}
      label={label}
      variant={inputFieldVariant}
      color={inputFieldColor}
      css={styles.textFieldStyles}
      size={"small"}
      SelectProps={{
        IconComponent: ExpandMoreIcon
      }}
      {...rest}
    />
  );
};

TextField.propTypes = propTypes;
export { TextField };
