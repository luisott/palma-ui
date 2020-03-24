import React from "react";
import { Select } from "../../Select";
import {} from "@material-ui/core";
import { InputGroupInput } from "../InputGroupInput";
import * as styles from "./InputGroupSelect.styles";

const InputGroupSelect = props => {
  return <Select css={styles.select} input={<InputGroupInput />} {...props} />;
};

export { InputGroupSelect };
