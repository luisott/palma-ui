import React from "react";
import Button from "./Button";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Button"
};

export const button = () => (
  <Button disabled={boolean("Disabled", false)}>
    {text("Label", "Button Label")}
  </Button>
);
