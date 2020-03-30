import React, { useState } from "react";
import { Dialog as DialogComponent } from "./Dialog";
import { Button } from "../Button";

import {
  DialogTitle,
  DialogContent,
  DialogContentText
} from "@material-ui/core";
import { BUTTON_VARIANTS } from "../Button/types";
import { DialogActions } from "./DialogActions";
import Readme from "./README.md";

export default {
  title: "Components/Dialog",
  parameters: {
    readme: {
      // Show readme before story
      content: Readme
    }
  }
};

export const Dialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>Open dialog</Button>
      <DialogComponent onClose={handleClose} open={open}>
        <DialogTitle id="dialog-title">Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare
            erat risus, vel tristique orci faucibus vitae. Fusce nec lacus
            pellentesque, rhoncus tortor gravida, bibendum quam. Vestibulum at
            facilisis orci. Sed ultricies lorem et commodo pulvinar.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Not so sure</Button>
          <Button variant={BUTTON_VARIANTS.contained} onClick={handleClose}>
            Sure
          </Button>
        </DialogActions>
      </DialogComponent>
    </>
  );
};
