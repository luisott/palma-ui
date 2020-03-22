import React from "react";
import PropTypes from "prop-types";

import { boolean, text } from "@storybook/addon-knobs";
import { FilterSelect } from "./FilterSelect";
import { css } from "@emotion/core";
import { allCountries, countryToFlag } from "../data/countries";
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

const countryOptionRender = country => (
  <Typography variant="inherit" noWrap>
    {country.flagCode} {country.name} (+{country.phone})
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
  const country = countriesWithFlagsAndIds.find(({ name }) => name === value);
  if (country) {
    return (
      <div css={customInputDivStyle}>
        {country.flagCode} (+{country.phone})
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

const countriesWithFlagsAndIds = allCountries.map(country => ({
  ...country,
  flagCode: countryToFlag(country.code),
  id: country.code
}));

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
      options={countriesWithFlagsAndIds}
      placeholder={"Pick a country"}
      renderOption={countryOptionRender}
    />
  </div>
);

export const withCustomInputComponent = () => (
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
      options={countriesWithFlagsAndIds}
      placeholder={"Pick a country"}
      inputComponent={CustomInputComponent}
    />
  </div>
);
