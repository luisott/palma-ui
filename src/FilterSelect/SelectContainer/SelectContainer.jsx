import React from "react";
import PropTypes from "prop-types";

import * as styles from "./SelectContainer.styles";
import { useTheme } from "@material-ui/core/styles";

const propTypes = {
  openResults: PropTypes.bool,
  openResultsTop: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.any
};

const SelectContainer = ({
  openResults,
  openResultsTop,
  disabled,
  children
}) => {
  const theme = useTheme();
  return (
    <div
      css={[
        styles.containerWrapper(theme).base,
        openResults && styles.containerWrapper(theme).openResults,
        disabled && styles.containerWrapper(theme).disabled,
        openResults &&
          openResultsTop &&
          styles.containerWrapper(theme).openResultsTop
      ]}
    >
      {children}
    </div>
  );
};

SelectContainer.propTypes = propTypes;
export { SelectContainer };
