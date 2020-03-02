import React from "react";
import { boolean, text } from "@storybook/addon-knobs";
import { FilterSelect } from "./FilterSelect";
import { css } from "@emotion/core";
import { allCountries, countryToFlag } from "@data/countries";
import Typography from "@material-ui/core/Typography";

export default {
  title: "Components/FilterSelect"
};

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

export const filterSelect = () => (
  <div
    css={css`
      width: 300px;
    `}
  >
    <FilterSelect
      label={"some label"}
      dropDownIconLabel={"show options"}
      options={movies}
      placeholder={text("Placeholder", "Pick a value or search...")}
      disabled={boolean("Disabled", false)}
      showLabel={boolean("Show Label", false)}
    />
  </div>
);

const countryOptionRender = country => (
  <Typography variant="inherit" noWrap>
    {countryToFlag(country.code)} {country.name} (+{country.phone})
  </Typography>
);

export const withOptionsRenderer = () => (
  <div
    css={css`
      width: 300px;
    `}
  >
    <FilterSelect
      label={"country picker"}
      showLabel={boolean("Show Label", false)}
      disabled={boolean("Disabled", false)}
      dropDownIconLabel={"show options"}
      options={allCountries}
      placeholder={"Pick a country"}
      renderOption={countryOptionRender}
    />
  </div>
);
