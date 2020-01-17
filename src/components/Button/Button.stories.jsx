import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import { text, boolean, select } from "@storybook/addon-knobs";
import Button from "./Button";

export default {
  title: "Components|Button"
};

export const button = () => (
  <Button
    disabled={boolean("Disabled", false)}
    loading={boolean("Loading", false)}
    variant={select("Variant", ["text", "outlined", "contained"], "contained")}
    startIcon={boolean("Left icon", false) && <DeleteIcon />}
    endIcon={boolean("Right icon", false) && <KeyboardArrowDown />}
  >
    {text("Label", "Button Label")}
  </Button>
);
