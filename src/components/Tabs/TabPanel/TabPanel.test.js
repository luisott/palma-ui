import React from "react";
import { render } from "@testing-library/react";
import TabPanel from "./TabPanel";

it("renders content when current tab is this one", () => {
  const label = "Label";
  const { getByText } = render(
    <TabPanel index={0} currentTab={0} ariaLabelPrefix={label}>
      {label}
    </TabPanel>
  );
  expect(getByText(label)).toBeInTheDocument();
  expect(getByText(label).hidden).toEqual(false);
});

it("doesn't render content when current tab is not this one", () => {
  const label = "Label";
  const { getByText } = render(
    <TabPanel index={0} currentTab={1} ariaLabelPrefix={label}>
      {label}
    </TabPanel>
  );
  expect(getByText(label).hidden).toEqual(true);
});
