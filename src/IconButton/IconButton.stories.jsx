import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "./IconButton";
import { boolean, select } from "@storybook/addon-knobs";

export default {
  title: "Components/IconButton"
};

export const iconButton = () => (
  <IconButton
    aria-label={"something"}
    disabled={boolean("Disabled", false)}
    color={select(
      "Color",
      ["primary", "secondary", "inherit", "default"],
      "default"
    )}
    containerColor={select(
      "Container color",
      ["primary", "secondary"],
      "primary"
    )}
    type={select("Type", ["filled", "outlined", "text"], "text")}
  >
    <DeleteIcon />
  </IconButton>
);
