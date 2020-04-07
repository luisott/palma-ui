import React from "react";
import { Select } from "../../Select";
import { InputGroupInput } from "../InputGroupInput";

const InputGroupSelect = props => {
  return <Select input={<InputGroupInput />} {...props} />;
};

export { InputGroupSelect };
