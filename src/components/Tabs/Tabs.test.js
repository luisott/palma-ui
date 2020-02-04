import React from "react";
import { render } from "@testing-library/react";
import { Tabs } from "./Tabs";
import { Tab } from "./Tab/Tab";

it("renders some label", () => {
  const label = "Label";
  const { getByText } = render(
    <Tabs value={0}>
      <Tab label={label} ariaLabelPrefix={label} index={0} />
    </Tabs>
  );
  expect(getByText(label)).toBeInTheDocument();
});
