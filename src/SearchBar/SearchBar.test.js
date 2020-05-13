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
