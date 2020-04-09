import React from "react";
import * as styles from "./InputGroupInput.styles";
import { OutlinedInput } from "../../OutlinedInput";

const InputGroupInput = props => {
  return <OutlinedInput css={styles.input} {...props} />;
};

export { InputGroupInput };
