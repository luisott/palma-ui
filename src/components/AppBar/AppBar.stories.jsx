import React from "react";
import { boolean } from "@storybook/addon-knobs";
import AppBar from "./AppBar";
import { css } from "@emotion/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Tabs from "components/Tabs/Tabs";
import Tab from "components/Tabs/Tab/Tab";

export default {
  title: "Components|AppBar"
};

const styleWrapper = css`
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

const logoWrapperStyle = css`
  width: 100%;
`;

const tabStyle = css`
  && {
    width: 100%;
    overflow: inherit;
    height: 100%;
    align-self: flex-end;

    .MuiTabs-indicator {
      background-color: white;
    }
  }
`;

export const appBar = () => (
  <div css={styleWrapper}>
    <CssBaseline />
    <AppBar>
      <div css={logoWrapperStyle}>
        <Typography>LOGO</Typography>{" "}
      </div>
      <Tabs
        value={0}
        css={tabStyle}
        aria-label="simple tabs example"
        centered={boolean("Centered", false)}
        variant={boolean("Full Width", false) ? "fullWidth" : null}
        // TabIndicatorProps={{ css: tabIndicatorStyle }}
      >
        <Tab label="Item One" ariaLabelPrefix={"ariaLabelPrefix"} index={0} />
        <Tab label="Item Two" ariaLabelPrefix={"ariaLabelPrefix"} index={1} />
        <Tab label="Item Three" ariaLabelPrefix={"ariaLabelPrefix"} index={2} />
      </Tabs>
      <IconButton edge="end" color="inherit">
        <Avatar />
      </IconButton>
    </AppBar>
  </div>
);

appBar.story = {
  parameters: {
    centered: { disable: true }
  }
};
