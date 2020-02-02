import React from "react";
import MaterialCardContent from "@material-ui/core/CardContent";

import * as styles from "./CardContent.styles";

const CardContent = props => {
  return <MaterialCardContent css={styles.style} {...props} />;
};

export default CardContent;
