import React from "react";

import DialogActionsMaterial from "@material-ui/core/DialogActions";
import * as styles from "./DialogActions.styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const DialogActions = props => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("xs"));

  const actionsStyles = [
    styles.dialogActionsStyles.base,
    mobile && styles.dialogActionsStyles.mobile
  ];
  return <DialogActionsMaterial css={actionsStyles} {...props} />;
};

export default DialogActions;
