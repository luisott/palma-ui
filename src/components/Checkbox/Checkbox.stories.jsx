import React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import Checkbox from "./Checkbox";
import { FormControlLabel } from "@material-ui/core";

export default {
  title: "Components/Checkbox"
};

export const checkbox = () => (
  <Checkbox ariaLabel="some Label" disabled={boolean("Disabled", false)} />
);

export const withLabel = () => (
  <FormControlLabel
    disabled={boolean("Disabled", false)}
    control={<Checkbox />}
    label={text("Label", "Some Label")}
  />
);
