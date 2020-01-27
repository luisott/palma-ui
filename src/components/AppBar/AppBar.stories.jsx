import React, { useState } from "react";
import { boolean } from "@storybook/addon-knobs";
import AppBar from "./AppBar";
import { css } from "@emotion/core";
import { IconButton } from "components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Tabs, Tab } from "components";
import * as styles from "components/AppBar/AppBar.styles";
import {
  Typography,
  Avatar,
  Toolbar,
  Drawer,
  ListItemText,
  List,
  ListItem
} from "@material-ui/core";

export default {
  title: "Components|AppBar"
};

const storyStyleWrapper = css`
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  overflow: auto;
  margin-left: 20px;
  margin-right: 20px;
`;

const storyMobileStyleWrapper = css`
  ${storyStyleWrapper};
  margin-left: 100px;
  margin-right: 100px;
`;

const logoWrapperStyle = css`
  width: 100%;
`;

const menuIconStyle = css`
  && {
    margin-right: 20px;
  }
`;

const closeIconStyle = css`
  && {
    align-self: flex-end;
  }
`;

export const appBarDesktop = () => (
  <div css={storyStyleWrapper}>
    <AppBar>
      <Toolbar variant={"dense"}>
        <Typography variant="h5" css={logoWrapperStyle}>
          LOGO
        </Typography>
        <Tabs
          value={0}
          css={styles.appBarStyle}
          aria-label="simple tabs example"
          centered={boolean("Centered", false)}
          variant={boolean("Full Width", false) ? "fullWidth" : null}
        >
          <Tab label="Item One" ariaLabelPrefix={"ariaLabelPrefix"} index={0} />
          <Tab label="Item Two" ariaLabelPrefix={"ariaLabelPrefix"} index={1} />
          <Tab
            label="Item Three"
            ariaLabelPrefix={"ariaLabelPrefix"}
            index={2}
          />
        </Tabs>
        <IconButton aria-label="user" edge="end" color="inherit">
          <Avatar />
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
);

export const AppBarMobile = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div css={storyMobileStyleWrapper}>
      <AppBar>
        <Toolbar variant={"dense"}>
          <IconButton
            css={menuIconStyle}
            color="inherit"
            edge="start"
            aria-label="menu"
            onClick={handleOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" css={logoWrapperStyle}>
            LOGO
          </Typography>
          <IconButton aria-label="user" edge="end" color="inherit">
            <Avatar />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="top" open={open} onClose={handleClose}>
        <IconButton css={closeIconStyle}>
          <CloseIcon onClick={handleClose} />
        </IconButton>
        <List>
          {["Item One", "Item Two", "Item Three"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};
