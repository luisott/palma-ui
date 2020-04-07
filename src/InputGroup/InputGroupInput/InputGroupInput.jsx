import React from "react";
import * as styles from "./InputGroupInput.styles";
import { OutlinedInput } from "@material-ui/core";

const InputGroupInput = props => {
  return (
    <OutlinedInput
      css={styles.input}
      notched={false}
      margin={"dense"}
      {...props}
    />
  );
};

export { InputGroupInput };
