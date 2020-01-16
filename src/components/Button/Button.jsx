import React from "react";
import PropTypes from "prop-types";
import { Button as MaterialButton, CircularProgress } from "@material-ui/core";
import * as colors from "../../colors";
import * as styles from "./Button.styles";

export const BUTTON_VARIANTS = {
  text: "text",
  outlined: "outlined",
  contained: "contained"
};

const props = {
  danger: PropTypes.bool,
  loading: PropTypes.bool,
  variant: PropTypes.oneOf([BUTTON_VARIANTS.values])
};

const defaultProps = {
  variant: BUTTON_VARIANTS.outlined
};

const Button = ({ variant, danger, loading, children, ...rest }) => {
  const buttonStyle = [
    styles.buttonStyles().base,
    styles.buttonStyles(
      danger ? colors.danger : colors.primaryBlue,
      danger ? colors.dangerMedium : colors.primaryBlueMedium,
      danger ? colors.dangerLight : colors.primaryBlueLight,
      danger ? colors.dangerDark : colors.primaryBlueDark
    )[variant]
  ];

  const progressIndicatorStyle = [
    styles.progressIndicatorStyles().base,
    styles.progressIndicatorStyles(danger ? colors.danger : colors.primaryBlue)[
      variant
    ]
  ];

  return (
    <MaterialButton
      disableTouchRipple
      color="primary"
      css={buttonStyle}
      disableElevation
      variant={variant}
      {...rest}
    >
      {loading && (
        <CircularProgress
          data-testid="loading"
          css={progressIndicatorStyle}
          size={24}
        />
      )}
      <div css={styles.childStyle(loading)}>{children}</div>
    </MaterialButton>
  );
};

Button.props = props;
Button.defaultProps = defaultProps;
export default Button;
