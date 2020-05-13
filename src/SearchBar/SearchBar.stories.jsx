import React from "react";
import { SearchBar as SearchBarComponent } from "./SearchBar";
import { boolean, select } from "@storybook/addon-knobs";
import { sizes } from "@types";
import { css } from "@emotion/core";
import Readme from "./README.md";

const movies = [
  { name: "The Shawshank Redemption", year: 1994, id: "0", country: "🇺🇸" },
  { name: "The Godfather", year: 1972, id: "1", country: "🇺🇸" },
  { name: "The Godfather: Part II", year: 1974, id: "2", country: "🇺🇸" },
  { name: "The Dark Knight", year: 2008, id: "3", country: "🇺🇸" },
  { name: "12 Angry Men", year: 1957, id: "4", country: "🇺🇸" },
  { name: "Inglourious Basterds", year: 2009, id: "5", country: "🇺🇸" },
  { name: "Snatch", year: 2000, id: "6", country: "🇬🇧" },
  { name: "3 Idiots", year: 2009, id: "7", country: "🇺🇸" },
  {
    name: "Monty Python and the Holy Grail",
    year: 1975,
    id: "8",
    country: "🇺🇸",
  },
];

export default {
  title: "Components/SearchBar",
  parameters: {
    readme: {
      // Show readme before story
      content: Readme,
    },
  },
};

export const SearchBar = () => {
  return (
    <div
      css={css`
        width: 300px;
        margin-bottom: 100px;
        position: absolute;
      `}
    >
      <SearchBarComponent
        label={"search storybook"}
        placeholder={"Search..."}
        size={select("Size", sizes, sizes.MEDIUM)}
        activeBorderColor={select(
          "Active Border Color ",
          ["primary", "secondary", "error"],
          null
        )}
        withSurface={boolean("With Surface", false)}
        disabled={boolean("Disabled", false)}
        options={movies}
      />
    </div>
  );
};
