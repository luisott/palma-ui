import React from "react";
import Button from "./Button";
import { text, boolean, select } from "@storybook/addon-knobs";

export default {
  title: "Components|Button"
};

export const button = () => (
  <Button
    disabled={boolean("Disabled", false)}
    loading={boolean("Loading", false)}
    danger={boolean("Danger", false)}
    variant={select("Variant", ["text", "outlined", "contained"], "contained")}
  >
    {text("Label", "Button Label")}
  </Button>
);
