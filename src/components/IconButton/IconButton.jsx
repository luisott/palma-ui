import React from "react";
import MaterialIconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";

import * as styles from "./IconButton.styles";
import { useTheme } from "@material-ui/core/styles";

const props = {
  "aria-label": PropTypes.string.isRequired
};

const IconButton = props => {
  const theme = useTheme();

  return <MaterialIconButton css={styles.iconButtonStyles(theme)} {...props} />;
};

IconButton.props = props;
export default IconButton;
