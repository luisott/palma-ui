import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "./IconButton";
import { boolean } from "@storybook/addon-knobs";

export default {
  title: "Components|IconButton"
};

export const iconButton = () => (
  <IconButton aria-label={"something"} disabled={boolean("Disabled", false)}>
    <DeleteIcon />
  </IconButton>
);
