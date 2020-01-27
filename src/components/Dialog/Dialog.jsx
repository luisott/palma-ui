import React from "react";
import PropTypes from "prop-types";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import MaterialDialog from "@material-ui/core/Dialog";

import * as styles from "./Dialog.styles";
import IconButton from "../IconButton/IconButton";

const props = {
  onClose: PropTypes.func
};

const Dialog = ({ onClose, children, ...props }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <MaterialDialog fullScreen={fullScreen} {...props}>
      {onClose && (
        <IconButton
          aria-label="close"
          css={styles.closeButtonStyle}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      )}
      {children}
    </MaterialDialog>
  );
};

Dialog.props = props;
export default Dialog;
