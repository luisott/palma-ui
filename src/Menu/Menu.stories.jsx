import React, { useState } from "react";
import { Button } from "../Button";
import { MenuItem } from "../MenuItem";
import { boolean, select } from "@storybook/addon-knobs";
import { Menu } from "./Menu";
import { IconButton } from "../IconButton";
import ExpandMore from "@material-ui/icons/ExpandMore";

export default {
  title: "Components/Menu"
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
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        openUp={boolean("Open Up", false)}
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
      <IconButton aria-label={"some-label"} onClick={handleOpen} size={"small"}>
        <ExpandMore />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
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
