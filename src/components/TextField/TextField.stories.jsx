import React from "react";
// import { text, boolean, select } from "@storybook/addon-knobs";
import TextField from "./TextField";

export default {
  title: "Components|TextField"
};

export const textField = () => <TextField id={"some-id"} label={"Name"} />;
