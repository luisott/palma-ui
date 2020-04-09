import React from "react";
import { render } from "@testing-library/react";
import { TextField } from "./TextField";

it("renders label", () => {
  const label = "Label";
  const { getAllByText } = render(<TextField id={"someId"} label={label} />);
  expect(getAllByText(label)[0]).toBeVisible(); // This is the actual label
  expect(getAllByText(label)[1]).not.toBeVisible(); // And this is the legend that material adds, we don't want to see that
});
