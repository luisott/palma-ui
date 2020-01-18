import React from "react";
import MaterialSelect from "@material-ui/core/Select";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Select = props => {
  return (
    <MaterialSelect
      variant="outlined"
      color={"secondary"}
      size={"small"}
      IconComponent={ExpandMoreIcon}
      {...props}
    />
  );
};

export default Select;
