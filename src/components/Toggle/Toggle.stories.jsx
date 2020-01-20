import React from "react";
import { boolean } from "@storybook/addon-knobs";
import Toggle from "./Toggle";

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
