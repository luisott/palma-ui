import React from "react";
import { Select as MaterialSelect, OutlinedInput } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { selectStyle } from "./Select.styles";
import { inputFieldColor, inputFieldVariant } from "../styles/commonStyles";
import { getMenuProps } from "../Menu";
import useTheme from "@material-ui/core/styles/useTheme";

const menuProps = {
  ...getMenuProps(),
  disablePortal: true
};

const Select = props => {
  const theme = useTheme();
  return (
    <MaterialSelect
      variant={inputFieldVariant}
      IconComponent={ExpandMoreIcon}
      css={selectStyle(theme)}
      input={
        <OutlinedInput
          color={inputFieldColor}
          notched={false}
          margin={"dense"}
        />
      }
      MenuProps={menuProps}
      {...props}
    />
  );
};

export { Select };
