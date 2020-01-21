import React from "react";
import MaterialButtonGroup from "@material-ui/core/ButtonGroup";

import * as styles from "./ButtonGroup.styles";

const ButtonGroup = props => {
  return (
    <MaterialButtonGroup
      css={styles.buttonGroupStyles}
      color="primary"
      {...props}
    />
  );
};

export default ButtonGroup;
