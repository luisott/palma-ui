import React from "react";

import {
  DialogActions as DialogActionsMaterial,
  useMediaQuery
} from "@material-ui/core";
import * as styles from "./DialogActions.styles";
import { useTheme } from "@material-ui/core/styles";

const DialogActions = props => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("xs"));

  const actionsStyles = [
    styles.dialogActionsStyles.base,
    mobile && styles.dialogActionsStyles.mobile
  ];
  return <DialogActionsMaterial css={actionsStyles} {...props} />;
};

export { DialogActions };
