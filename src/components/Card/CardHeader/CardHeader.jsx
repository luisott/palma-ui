import React from "react";
import MaterialCardHeader from "@material-ui/core/CardHeader";

import * as styles from "./CardHeader.styles";

const CardHeader = props => {
  return <MaterialCardHeader css={styles.style} {...props} />;
};

export default CardHeader;
