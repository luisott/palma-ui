import React from "react";
import { IconButton as MaterialIconButton } from "@material-ui/core";
import PropTypes from "prop-types";

import * as styles from "./IconButton.styles";
import { useTheme } from "@material-ui/core/styles";

const propTypes = {
  "aria-label": PropTypes.string.isRequired
};

const IconButton = props => {
  const theme = useTheme();

  return <MaterialIconButton css={styles.iconButtonStyles(theme)} {...props} />;
};

IconButton.propTypes = propTypes;
export { IconButton };
