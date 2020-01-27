import React, { useState } from "react";
import DialogComponent from "./Dialog";
import { Button } from "components";

import {
  DialogTitle,
  DialogContent,
  DialogContentText
} from "@material-ui/core";
import { BUTTON_VARIANTS } from "components/Button/types";
import DialogActions from "./DialogActions/DialogActions";

export default {
  title: "Components|Dialog"
};

export const Dialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
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
            I'm sure
          </Button>
        </DialogActions>
      </DialogComponent>
    </>
  );
};
