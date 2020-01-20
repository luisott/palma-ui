import React from "react";
import { boolean, text } from "@storybook/addon-knobs";
import Toggle from "./Toggle";
import { FormControlLabel } from "@material-ui/core";

export default {
  title: "Components|Toggle"
};

export const toggle = () => (
  <Toggle
    value="someValue"
    ariaLabel="Switch A"
    disabled={boolean("Disabled", false)}
  />
);

export const toggleWithLabel = () => (
  <FormControlLabel
    control={
      <Toggle
        value="someValue"
        ariaLabel="Switch A"
        disabled={boolean("Disabled", false)}
      />
    }
    label={text("Label", "Label")}
  />
);
