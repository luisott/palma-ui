import React from "react";
import PropTypes from "prop-types";
import { Select as MaterialSelect } from "@material-ui/core";
import { OutlinedInput } from "../OutlinedInput";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import * as styles from "./Select.styles";
import { getMenuProps } from "../Menu";
import useTheme from "@material-ui/core/styles/useTheme";

const menuProps = {
  ...getMenuProps(),
  disablePortal: true
};
const propTypes = {
  color: PropTypes.oneOf(["primary", "secondary"])
};

const defaultProps = {
  color: "primary"
};
const Select = ({ color, ...rest }) => {
  const theme = useTheme();
  return (
    <MaterialSelect
      variant="outlined"
      IconComponent={ExpandMoreIcon}
      css={styles.select(theme)}
      input={<OutlinedInput color={color} />}
      MenuProps={menuProps}
      color={color}
      {...rest}
    />
  );
};
Select.propTypes = propTypes;
Select.defaultProps = defaultProps;
export { Select };
