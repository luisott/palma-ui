import React from "react";
import { Button as MaterialButton } from "@material-ui/core";

const Button = ({ children }) => {
  return <MaterialButton>{children}</MaterialButton>;
};

export default Button;
