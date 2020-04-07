import React from "react";
import { text, boolean, select } from "@storybook/addon-knobs";
import { MenuItem } from "../MenuItem";

import { TextField } from "./TextField";
import Readme from "./README.md";

export default {
  title: "Components/TextField",
  parameters: {
    readme: {
      // Show readme before story
      content: Readme
    }
  }
};

export const textField = () => (
  <TextField
    id={"some-id"}
    label={text("Label", "Label")}
    disabled={boolean("Disabled", false)}
    error={boolean("Error", false)}
    fullWidth={boolean("Full width", false)}
    helperText={text("Helper text", "Helper text")}
    multiline={boolean("Multiline", false)}
    placeholder={text("Placeholder", "Placeholder")}
    required={boolean("Required", false)}
    select={boolean("Select", false)}
    color={select("Color", ["primary", "secondary"], "secondary")}
  >
    <MenuItem key={0} value={0}>
      One
    </MenuItem>
    <MenuItem key={1} value={1}>
      Two
    </MenuItem>
    <MenuItem key={2} value={2}>
      Three
    </MenuItem>
  </TextField>
);
