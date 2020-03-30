import React from "react";
import { ButtonGroup as MaterialButtonGroup } from "@material-ui/core";

import * as styles from "./ButtonGroup.styles";

const ButtonGroup = props => {
  return <MaterialButtonGroup css={styles.buttonGroupStyles} {...props} />;
};

export { ButtonGroup };
