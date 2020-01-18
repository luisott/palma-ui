import React from "react";
import MaterialTextField from "@material-ui/core/TextField";

import PropTypes from "prop-types";
import * as styles from "./TextField.styles";

const props = {
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
      variant="outlined"
      color={"secondary"}
      css={styles.textFieldStyles.base}
      size={"small"}
      {...rest}
    />
  );
};

TextField.props = props;
export default TextField;
