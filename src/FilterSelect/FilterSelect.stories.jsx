import React from "react";
import PropTypes from "prop-types";

import { boolean, text, select } from "@storybook/addon-knobs";
import { FilterSelect } from "./FilterSelect";
import { css } from "@emotion/core";
import Typography from "@material-ui/core/Typography";
import Readme from "./README.md";

export default {
  title: "Components/FilterSelect",
  parameters: {
    readme: {
      // Show readme before story
      content: Readme
    }
  }
};

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
    country: "🇺🇸"
  }
];

const countryOptionRender = movie => (
  <Typography variant="inherit" noWrap>
    {movie.country} {movie.name} ({movie.year})
  </Typography>
);

const customInputDivStyle = css`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const CustomInputComponent = ({ value, placeholder }) => {
  const movie = movies.find(({ name }) => name === value);
  if (movie) {
    return (
      <div css={customInputDivStyle}>
        {movie.country} ({movie.year})
      </div>
    );
  }
  return (
    <div css={customInputDivStyle}>
      <Typography noWrap>{placeholder}</Typography>
    </div>
  );
};

CustomInputComponent.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string
};

export const filterSelect = () => (
  <FilterSelect
    label={"some label"}
    dropDownIconLabel={"show options"}
    options={movies}
    placeholder={text("Placeholder", "Pick a value or search...")}
    disabled={boolean("Disabled", false)}
    showLabel={boolean("Show Label", false)}
    color={select("Color", ["primary", "secondary"], "secondary")}
    popperOptions={{
      placement: select(
        "Results placement",
        ["bottom-start", "bottom-end", "bottom", "top-start", "top-end", "top"],
        "bottom-start"
      )
    }}
    elevation={select("Elevation", [0, 1, 2, 3, 4, 5, 6, 7, 8], 0)}
  />
);

export const withOptionsRenderer = () => (
  <FilterSelect
    label={"movie picker"}
    showLabel={boolean("Show Label", false)}
    disabled={boolean("Disabled", false)}
    color={select("Color", ["primary", "secondary"], "secondary")}
    dropDownIconLabel={"show options"}
    options={movies}
    placeholder={"Pick a movie"}
    renderOption={countryOptionRender}
    popperOptions={{
      placement: select(
        "Results placement",
        ["bottom-start", "bottom-end", "bottom", "top-start", "top-end", "top"],
        "bottom-start"
      )
    }}
    elevation={select("Elevation", [0, 1, 2, 3, 4, 5, 6, 7, 8], 0)}
  />
);
