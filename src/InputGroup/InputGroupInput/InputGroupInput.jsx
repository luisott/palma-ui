import React from "react";
import InputBase from "@material-ui/core/InputBase";
import * as styles from "./InputGroupInput.styles";

const InputGroupInput = props => {
  return <InputBase css={styles.input} labelWidth={0} {...props} />;
};

export { InputGroupInput };
