import React, { useState } from "react";
import { Typography } from "@material-ui/core";
// import { text, boolean, select } from "@storybook/addon-knobs";
import Tabs from "./Tabs";
import Tab from "./Tab/Tab";
import TabPanel from "components/Tabs/TabPanel/TabPanel";
import { boolean } from "@storybook/addon-knobs";
import { css } from "@emotion/core";

export default {
  title: "Components|Tabs"
};

export const tabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ariaLabelPrefix = "simple";

  return (
    <div
      css={css`
        min-width: 500px;
      `}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        centered={boolean("Centered", false)}
        variant={boolean("Full Width", false) ? "fullWidth" : null}
      >
        <Tab label="Item One" ariaLabelPrefix={ariaLabelPrefix} index={0} />
        <Tab label="Item Two" ariaLabelPrefix={ariaLabelPrefix} index={1} />
        <Tab label="Item Three" ariaLabelPrefix={ariaLabelPrefix} index={2} />
      </Tabs>
      <TabPanel index={0} currentTab={value} ariaLabelPrefix={ariaLabelPrefix}>
        <Typography>Item One</Typography>
      </TabPanel>
      <TabPanel index={1} currentTab={value} ariaLabelPrefix={ariaLabelPrefix}>
        <Typography> Item Two</Typography>
      </TabPanel>
      <TabPanel index={2} currentTab={value} ariaLabelPrefix={ariaLabelPrefix}>
        <Typography>Item Three</Typography>
      </TabPanel>
    </div>
  );
};
