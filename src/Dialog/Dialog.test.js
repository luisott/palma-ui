import React from "react";
import { render } from "@testing-library/react";
import { Dialog } from "./Dialog";

it("renders children", () => {
  const label = "Label";
  const { getByText } = render(<Dialog open={true}>{label}</Dialog>);
  expect(getByText(label)).toBeInTheDocument();
});

it("renders close button when onClose passed", () => {
  const label = "Label";
  const onClose = () => {};
  const { getByLabelText } = render(
    <Dialog open={true} onClose={onClose}>
      {label}
    </Dialog>
  );
  expect(getByLabelText("close")).toBeInTheDocument();
});
