import React from "react";
// import InputBase from "@material-ui/core/InputBase";
import * as styles from "./InputGroupInput.styles";
import { inputFieldColor } from "../../styles/commonStyles";
import { OutlinedInput } from "@material-ui/core";

const InputGroupInput = props => {
  // return <InputBase css={styles.input} {...props} />;
  return (
    <OutlinedInput
      css={styles.input}
      {...props}
      color={inputFieldColor}
      notched={false}
      margin={"dense"}
    />
  );
};

export { InputGroupInput };
