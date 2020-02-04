import React from "react";
import { CardHeader as MaterialCardHeader } from "@material-ui/core";

import * as styles from "./CardHeader.styles";

const CardHeader = props => {
  return <MaterialCardHeader css={styles.style} {...props} />;
};

export { CardHeader };
