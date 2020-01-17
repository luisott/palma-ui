import React from "react";
import MaterialTextField from "@material-ui/core/TextField";

import PropTypes from "prop-types";
import * as styles from "./TextField.styles";

const props = {
  /**
   * Needed for accessibility
   */
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.bool
};

const TextField = ({ error, label, ...rest }) => {
  return (
    <MaterialTextField
      label={label}
      variant="outlined"
      error={error}
      css={styles.textFieldStyles.base}
      size={"small"}
      {...rest}
    />
  );
};

TextField.props = props;
export default TextField;
