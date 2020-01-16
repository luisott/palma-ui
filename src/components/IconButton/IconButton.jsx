import React from "react";
import MaterialIconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";

import * as styles from "./IconButton.styles";

const props = {
  "aria-label": PropTypes.string.isRequired
};

const IconButton = props => {
  return (
    <MaterialIconButton
      css={styles.iconButtonStyles}
      disableTouchRipple
      {...props}
    />
  );
};

IconButton.props = props;
export default IconButton;
