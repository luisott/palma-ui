import React, { useState } from "react";
import { boolean, select } from "@storybook/addon-knobs";
import { AppBar } from "./AppBar";
import { css } from "@emotion/core";
import { IconButton } from "../IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import AccountCircle from "@material-ui/icons/AccountCircle";
import {
  Typography,
  Toolbar,
  ListItemText,
  List,
  ListItem
} from "@material-ui/core";
import { AppBarTabs } from "./AppBarTabs";
import { AppBarTab } from "./AppBarTab";
import { AppBarMenuDrawer } from "./AppBarMenuDrawer";
import Readme from "./README.md";

export default {
  title: "Components/AppBar",
  parameters: {
    readme: {
      // Show readme before story
      content: Readme
    }
  }
};

const storyStyleWrapper = css`
  display: flex;
  align-items: center;
  overflow: auto;
  margin-left: 20px;
  margin-right: 20px;
  min-width: 300px;
  max-width: 800px;
  flex: auto 1 1;
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
  align-self: flex-start;

  && {
    margin-left: 12px;
    color: white;
  }
`;

const sideMenuStyle = css`
  color: white;
`;

const sideMenuListItem = css`
  && {
    padding-left: 50px;
  }
`;

const appMenuDrawerStyle = css`
  .MuiPaper-root {
    width: 100%;
  }
`;

const accountCircle = css`
  && {
    width: 32px;
    height: 32px;
  }
`;

export const appBarDesktop = () => (
  <div css={storyStyleWrapper}>
    <AppBar color={select("Color", ["primary", "secondary"], "primary")}>
      <Toolbar>
        <Typography variant="h5" css={logoWrapperStyle}>
          LOGO
        </Typography>
        <AppBarTabs
          value={0}
          aria-label="simple tabs example"
          centered={boolean("Centered", false)}
          variant={boolean("Full Width", false) ? "fullWidth" : null}
        >
          <AppBarTab
            label="Item One"
            ariaLabelPrefix={"ariaLabelPrefix"}
            index={0}
          />
          <AppBarTab
            label="Item Two"
            ariaLabelPrefix={"ariaLabelPrefix"}
            index={1}
          />
          <AppBarTab
            label="Item Three"
            ariaLabelPrefix={"ariaLabelPrefix"}
            index={2}
          />
        </AppBarTabs>
        <IconButton aria-label="user" edge="end" color="inherit" size={"small"}>
          <AccountCircle css={accountCircle} />
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

  const color = select("Color", ["primary", "secondary"], "primary");

  return (
    <div css={storyMobileStyleWrapper}>
      <AppBar color={color}>
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
          <IconButton
            aria-label="user"
            edge="end"
            color="inherit"
            size={"small"}
          >
            <AccountCircle css={accountCircle} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <AppBarMenuDrawer
        anchor="left"
        color={color}
        open={open}
        onClose={handleClose}
        css={appMenuDrawerStyle}
      >
        <IconButton css={closeIconStyle}>
          <CloseIcon onClick={handleClose} />
        </IconButton>
        <List css={sideMenuStyle}>
          {["Item One", "Item Two", "Item Three"].map(text => (
            <ListItem button key={text} css={sideMenuListItem}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </AppBarMenuDrawer>
    </div>
  );
};
