import React from "react";
import PropTypes from "prop-types";
import { Checkbox as MaterialCheckbox } from "@material-ui/core";

const propTypes = {
  ariaLabel: PropTypes.string.isRequired
};

const Checkbox = ({ ariaLabel, ...props }) => {
  return (
    <MaterialCheckbox
      inputProps={{ "aria-label": ariaLabel }}
      color="primary"
      {...props}
    />
  );
};

Checkbox.propTypes = propTypes;
export { Checkbox };
