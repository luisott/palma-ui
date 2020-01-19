import React from "react";
import PropTypes from "prop-types";
import MaterialRadio from "@material-ui/core/Radio";
import { FormControlLabel } from "@material-ui/core";

const props = {
  formControlProps: PropTypes.object,
  radioProps: PropTypes.object,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number])
};

const Radio = ({ label, formControlProps, value, radioProps }) => {
  return (
    <FormControlLabel
      value={value}
      control={<MaterialRadio color="primary" {...radioProps} />}
      label={label}
      {...formControlProps}
    />
  );
};

Radio.props = props;
export default Radio;
