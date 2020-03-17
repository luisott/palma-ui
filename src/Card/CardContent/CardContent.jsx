import React from "react";
import { CardContent as MaterialCardContent } from "@material-ui/core";

import * as styles from "./CardContent.styles";

const CardContent = props => {
  return <MaterialCardContent css={styles.style} {...props} />;
};

export { CardContent };
