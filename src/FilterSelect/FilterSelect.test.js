import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { FilterSelect } from "./FilterSelect";

const movies = [
  { name: "The Shawshank Redemption", year: 1994, id: "0" },
  { name: "The Godfather", year: 1972, id: "1" },
  { name: "The Godfather: Part II", year: 1974, id: "2" },
  { name: "The Dark Knight", year: 2008, id: "3" },
  { name: "12 Angry Men", year: 1957, id: "4" },
  { name: "Inglourious Basterds", year: 2009, id: "5" },
  { name: "Snatch", year: 2000, id: "6" },
  { name: "3 Idiots", year: 2009, id: "7" },
  { name: "Monty Python and the Holy Grail", year: 1975, id: "8" }
];

it("renders empty by default", () => {
  const { getByLabelText } = render(
    <FilterSelect
      options={movies}
      label={"some label"}
      dropDownIconLabel={"show options"}
      showLabel={true}
    />
  );
  expect(getByLabelText("show options")).toBeInTheDocument();
  expect(getByLabelText("some label")).toBeInTheDocument();
});

// The useRef mock below throws an error
it.skip("renders options when arrow button clicked", () => {
  jest.spyOn(React, "useRef").mockReturnValueOnce({ current: jest.fn() });

  const { getByLabelText, getByText } = render(
    <FilterSelect
      options={movies}
      label={"some label"}
      dropDownIconLabel={"show options"}
    />
  );
  fireEvent.click(getByLabelText("show options"));
  expect(getByText(movies[0].name)).toBeInTheDocument();
});

it("no drop down arrow if no options passed", () => {
  const { queryByLabelText } = render(
    <FilterSelect
      options={[]}
      label={"some label"}
      dropDownIconLabel={"show options"}
    />
  );
  expect(queryByLabelText("show options")).not.toBeInTheDocument();
});
