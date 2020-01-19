import React from "react";
import PropTypes from "prop-types";
import MaterialCheckbox from "@material-ui/core/Checkbox";

const props = {
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

Checkbox.props = props;
export default Checkbox;
