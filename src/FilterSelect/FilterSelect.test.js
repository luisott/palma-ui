import React from "react";
import { render } from "@testing-library/react";
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
  { name: "Monty Python and the Holy Grail", year: 1975, id: "8" },
];

it("renders label", () => {
  const { getByLabelText } = render(
    <FilterSelect
      options={movies}
      label={"some label"}
      showLabel={true}
      inputProps={{ placeholder: "search stuff" }}
    />
  );
  expect(getByLabelText("some label")).toBeInTheDocument();
});
