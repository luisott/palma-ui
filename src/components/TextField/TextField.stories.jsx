import React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import MenuItem from "@material-ui/core/MenuItem";

import TextField from "./TextField";

export default {
  title: "Components|TextField"
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
