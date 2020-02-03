import React, { useState } from "react";
import Button from "components/Button/Button";
import { Menu as MenuMaterial, MenuItem } from "@material-ui/core";

export default {
  title: "Components/Menu"
};

export const Menu = () => {
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
      <MenuMaterial
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </MenuMaterial>
    </>
  );
};
