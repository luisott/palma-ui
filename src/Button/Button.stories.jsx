import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import { ButtonGroup } from "./ButtonGroup";

import { text, boolean, select } from "@storybook/addon-knobs";
import { Button } from "./Button";
import { css } from "@emotion/core";
import Readme from "./README.md";

export default {
  title: "Components/Button",
  parameters: {
    readme: {
      // Show readme before story
      content: Readme
    }
  }
};

export const button = () => (
  <Button
    disabled={boolean("Disabled", false)}
    loading={boolean("Loading", false)}
    variant={select("Variant", ["text", "outlined", "contained"], "contained")}
    color={select("Color", ["primary", "secondary"], "primary")}
    startIcon={boolean("Left icon", false) && <DeleteIcon />}
    endIcon={boolean("Right icon", false) && <KeyboardArrowDown />}
  >
    {text("Label", "Button Label")}
  </Button>
);

export const splitButton = () => {
  const variant = select(
    "Variant",
    ["text", "outlined", "contained"],
    "contained"
  );

  const disabled = boolean("Disabled", false);

  const color = select("Color", ["primary", "secondary"], "primary");

  return (
    <ButtonGroup
      disabled={disabled}
      variant={variant}
      aria-label="split button"
      color={color}
    >
      <Button variant={variant} color={color}>
        {text("Label", "Button Label")}
      </Button>
      <Button
        aria-label="select merge strategy"
        aria-haspopup="menu"
        variant={variant}
        disabled={disabled}
        color={color}
      >
        <KeyboardArrowDown
          css={css`
            && {
              display: flex;
            }
          `}
        />
      </Button>
    </ButtonGroup>
  );
};
