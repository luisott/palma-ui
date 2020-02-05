import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

it("renders label", () => {
  const label = "label";
  const { getByLabelText } = render(<SearchBar label={label} value={""} />);
  expect(getByLabelText(label)).toBeInTheDocument();
});

it("renders placeholder and no close button when empty", () => {
  const label = "label";
  const placeholder = "placeholder";
  const { getByPlaceholderText, queryByLabelText } = render(
    <SearchBar label={label} placeholder={placeholder} value={""} />
  );
  expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
  expect(queryByLabelText("close")).not.toBeInTheDocument();
});

it("renders value and close button when value changes to not empty", () => {
  const label = "label";
  const value = "value";
  const { getByLabelText } = render(<SearchBar label={label} />);

  fireEvent.change(getByLabelText(label), { target: { value: value } });
  expect(getByLabelText("close")).toBeInTheDocument();
});
