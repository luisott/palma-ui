import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import TabsComponent from "./Tabs";
import Tab from "./Tab/Tab";
import TabPanel from "components/Tabs/TabPanel/TabPanel";
import { boolean } from "@storybook/addon-knobs";
import { css } from "@emotion/core";

export default {
  title: "Components/Tabs"
};

const contentStyle = css`
  margin-top: 20px;
  background-color: lightgrey;
`;

export const Tabs = () => {
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
      <TabsComponent
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        centered={boolean("Centered", false)}
        variant={boolean("Full Width", false) ? "fullWidth" : null}
      >
        <Tab label="Item One" ariaLabelPrefix={ariaLabelPrefix} index={0} />
        <Tab label="Item Two" ariaLabelPrefix={ariaLabelPrefix} index={1} />
        <Tab label="Item Three" ariaLabelPrefix={ariaLabelPrefix} index={2} />
      </TabsComponent>
      <TabPanel index={0} currentTab={value} ariaLabelPrefix={ariaLabelPrefix}>
        <Typography css={contentStyle}>Item One</Typography>
      </TabPanel>
      <TabPanel index={1} currentTab={value} ariaLabelPrefix={ariaLabelPrefix}>
        <Typography css={contentStyle}> Item Two</Typography>
      </TabPanel>
      <TabPanel index={2} currentTab={value} ariaLabelPrefix={ariaLabelPrefix}>
        <Typography css={contentStyle}>Item Three</Typography>
      </TabPanel>
    </div>
  );
};
