import React from "react";
import PropTypes from "prop-types";
import MaterialButton from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useTheme } from "@material-ui/core/styles";

import * as styles from "./Button.styles";
import { BUTTON_VARIANTS } from "./types";

const props = {
  loading: PropTypes.bool,
  variant: PropTypes.oneOf([BUTTON_VARIANTS.values])
};

const defaultProps = {
  variant: BUTTON_VARIANTS.outlined
};

const Button = ({ variant, loading, children, ...rest }) => {
  const theme = useTheme();

  const buttonStyle = [
    styles.buttonStyles(theme.palette.primary.main).base,
    styles.buttonStyles(theme.palette.primary.main)[variant]
  ];

  const getProgressIndicator = () => {
    if (!loading) return null;

    const progressIndicatorStyle = [
      styles.progressIndicatorStyles.base,
      styles.progressIndicatorStyles[variant]
    ];

    debugger;

    return (
      <CircularProgress
        data-testid="loading"
        css={progressIndicatorStyle}
        size={24}
      />
    );
  };

  return (
    <MaterialButton
      color="primary"
      css={buttonStyle}
      disableElevation
      variant={variant}
      {...rest}
    >
      {getProgressIndicator()}
      <div css={styles.childStyle(loading)}>{children}</div>
    </MaterialButton>
  );
};

Button.props = props;
Button.defaultProps = defaultProps;
export default Button;
