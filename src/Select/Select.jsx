import React from "react";
import { Select as MaterialSelect, OutlinedInput } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { selectStyle } from "./Select.styles";
import { inputFieldColor, inputFieldVariant } from "../styles/commonStyles";
import { getMenuProps } from "../Menu";

const Select = props => {
  return (
    <MaterialSelect
      variant={inputFieldVariant}
      IconComponent={ExpandMoreIcon}
      css={selectStyle}
      input={<OutlinedInput color={inputFieldColor} />}
      MenuProps={getMenuProps()}
      {...props}
    />
  );
};

export { Select };
