import React from "react";
import { text } from "@storybook/addon-knobs";
import { FilterSelect } from "./FilterSelect";
import { css } from "@emotion/core";

export default {
  title: "Components/FilterSelect"
};

const movies = [
  { title: "The Shawshank Redemption", year: 1994, id: 0 },
  { title: "The Godfather", year: 1972, id: 1 },
  { title: "The Godfather: Part II", year: 1974, id: 2 },
  { title: "The Dark Knight", year: 2008, id: 3 },
  { title: "12 Angry Men", year: 1957, id: 4 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 }
];

export const filterSelect = () => (
  <div
    css={css`
      width: 300px;
    `}
  >
    <FilterSelect
      label={"some label"}
      options={movies}
      placeholder={text("Placeholder", "Pick a value or search...")}
    />
  </div>
);
