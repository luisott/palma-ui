import React from "react";
import { Button as MaterialButton } from "@material-ui/core";
import { css } from "@emotion/core";

const buttonStyle = css`
  & .MuiButton-label {
    text-transform: none;
  }
`;

const Button = ({ children, ...rest }) => {
  return (
    <MaterialButton css={buttonStyle} {...rest}>
      {children}
    </MaterialButton>
  );
};

export default Button;
