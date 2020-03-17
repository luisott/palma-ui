import React from "react";
import { render } from "@testing-library/react";
import { DialogActions } from "./DialogActions";

it("renders children", () => {
  const label = "Label";
  const { getByText } = render(<DialogActions>{label}</DialogActions>);
  expect(getByText(label)).toBeInTheDocument();
});
