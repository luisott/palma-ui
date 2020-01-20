import React from "react";
import PropTypes from "prop-types";
import MaterialRadio from "@material-ui/core/Radio";
import { FormControlLabel } from "@material-ui/core";

const props = {
  formControlLabelProps: PropTypes.object,
  radioProps: PropTypes.object,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number])
};

const Radio = ({ label, formControlLabelProps, value, radioProps }) => {
  return (
    <FormControlLabel
      value={value}
      control={<MaterialRadio color="primary" {...radioProps} />}
      label={label}
      {...formControlLabelProps}
    />
  );
};

Radio.props = props;
export default Radio;
