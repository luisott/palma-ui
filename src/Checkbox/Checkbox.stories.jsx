import React from "react";
import { text, boolean, select } from "@storybook/addon-knobs";
import { Checkbox } from "./Checkbox";
import { FormControlLabel } from "@material-ui/core";
import Readme from "./README.md";

export default {
  title: "Components/Checkbox",
  parameters: {
    readme: {
      // Show readme before story
      content: Readme
    }
  }
};
export const checkbox = () => (
  <Checkbox
    ariaLabel="some Label"
    disabled={boolean("Disabled", false)}
    color={select("Color", ["primary", "secondary", "default"], "primary")}
  />
);

export const withLabel = () => (
  <FormControlLabel
    disabled={boolean("Disabled", false)}
    control={<Checkbox ariaLabel={"label"} />}
    label={text("Label", "Some Label")}
  />
);
