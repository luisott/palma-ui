import React from "react";
import PropTypes from "prop-types";
import { Select as MaterialSelect, OutlinedInput } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { selectStyle } from "./Select.styles";
import { getMenuProps } from "../Menu";
import useTheme from "@material-ui/core/styles/useTheme";

const menuProps = {
  ...getMenuProps(),
  disablePortal: true
};
const propTypes = {
  color: PropTypes.oneOf(["primary", "secondary"])
};
const Select = ({ color, ...rest }) => {
  const theme = useTheme();
  return (
    <MaterialSelect
      variant="outlined"
      IconComponent={ExpandMoreIcon}
      css={selectStyle(theme)}
      input={<OutlinedInput notched={false} margin={"dense"} color={color} />}
      MenuProps={menuProps}
      color={color}
      {...rest}
    />
  );
};
Select.propTypes = propTypes;
export { Select };
