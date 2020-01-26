import React from "react";
import { boolean } from "@storybook/addon-knobs";
import AppBar from "./AppBar";
import { css } from "@emotion/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Tabs, Tab } from "components";
import * as styles from "components/AppBar/AppBar.styles";

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

export const appBar = () => (
  <div css={styleWrapper}>
    <CssBaseline />
    <AppBar>
      <div css={logoWrapperStyle}>
        <Typography>LOGO</Typography>{" "}
      </div>
      <Tabs
        value={0}
        css={styles.appBarStyle}
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
