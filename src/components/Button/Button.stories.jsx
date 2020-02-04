import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import ButtonGroup from "./ButtonGroup/ButtonGroup";

import { text, boolean, select } from "@storybook/addon-knobs";
import { Button } from "./Button";
import { css } from "@emotion/core";

export default {
  title: "Components/Button"
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

export const splitButton = () => {
  const variant = select(
    "Variant",
    ["text", "outlined", "contained"],
    "contained"
  );

  const disabled = boolean("Disabled", false);
  return (
    <ButtonGroup
      disabled={disabled}
      variant={variant}
      aria-label="split button"
    >
      <Button variant={variant}>{text("Label", "Button Label")}</Button>
      <Button
        aria-label="select merge strategy"
        aria-haspopup="menu"
        variant={variant}
        disabled={disabled}
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
