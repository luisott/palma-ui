import React from "react";
import MaterialSelect from "@material-ui/core/Select";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { selectStyle } from "./Select.styles";
import { OutlinedInput } from "@material-ui/core";
import { inputFieldColor, inputFieldVariant } from "../../styles/commonStyles";

const Select = props => {
  return (
    <MaterialSelect
      variant={inputFieldVariant}
      IconComponent={ExpandMoreIcon}
      css={selectStyle}
      input={<OutlinedInput color={inputFieldColor} />}
      {...props}
    />
  );
};

export default Select;
