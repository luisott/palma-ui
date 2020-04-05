import React, { useState } from "react";
import { Button } from "../Button";
import { MenuItem } from "../MenuItem";
import { boolean, select } from "@storybook/addon-knobs";
import { Menu } from "./Menu";
import { IconButton } from "../IconButton";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Readme from "./README.md";

export default {
  title: "Components/Menu",
  parameters: {
    readme: {
      // Show readme before story
      content: Readme
    }
  }
};

export const MenuButton = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => setOpen(false);
  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleOpen}
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        openUp={boolean("Open Up", false)}
        horizontalAlignment={select(
          "Horizontal Alignment",
          ["left", "center", "right"],
          "right"
        )}
        addMargin={true}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export const MenuIcon = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => setOpen(false);
  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  return (
    <>
      <IconButton
        aria-label={"some-label"}
        onClick={handleOpen}
        type="filled"
        size={"medium"}
      >
        <ExpandMore />
      </IconButton>
      <Menu
        id="simple-menu-icon"
        anchorEl={anchorEl}
        open={open}
        addMargin={true}
        openUp={boolean("Open Up", false)}
        onClose={handleClose}
        horizontalAlignment={select(
          "Horizontal Alignment",
          ["left", "center", "right"],
          "right"
        )}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};
