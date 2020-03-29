import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { Toggle } from "./Toggle";
import { FormControlLabel } from "@material-ui/core";

export default {
  title: "Components/Toggle"
};

export const toggle = () => (
  <Toggle
    value="someValue"
    ariaLabel="Switch A"
    disabled={boolean("Disabled", false)}
    color={select("Color", ["primary", "secondary"], "primary")}
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
