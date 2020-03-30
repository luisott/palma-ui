import React from "react";
import PropTypes from "prop-types";
import { Button as MaterialButton, CircularProgress } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import * as styles from "./Button.styles";
import { BUTTON_VARIANTS } from "./types";

const propTypes = {
  loading: PropTypes.bool,
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
  children: PropTypes.node,
  color: PropTypes.oneOf(["primary", "secondary"])
};

const defaultProps = {
  variant: BUTTON_VARIANTS.outlined,
  color: "primary"
};

const Button = ({ variant, loading, children, color, ...rest }) => {
  const theme = useTheme();

  const buttonStyle = [
    styles.buttonStyles(theme, color).base,
    styles.buttonStyles(theme, color)[variant]
  ];

  const getProgressIndicator = () => {
    if (!loading) return null;

    const progressIndicatorStyle = [
      styles.progressIndicatorStyles(theme, color).base,
      styles.progressIndicatorStyles(theme, color)[variant]
    ];

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
      color={color}
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

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export { Button };
