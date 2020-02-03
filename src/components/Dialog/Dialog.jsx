import React from "react";
import PropTypes from "prop-types";

import { useMediaQuery, Dialog as MaterialDialog } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

import * as styles from "./Dialog.styles";
import IconButton from "../IconButton/IconButton";

const propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node
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

Dialog.propTypes = propTypes;
export default Dialog;
