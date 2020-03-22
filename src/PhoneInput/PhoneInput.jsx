import React from "react";
import PropTypes from "prop-types";
import InputAdornment from "@material-ui/core/InputAdornment";
import { TextField } from "../TextField";
import { FilterSelect } from "../FilterSelect";
import { allCountries, countryToFlag } from "../data/countries";
import Typography from "@material-ui/core/Typography";

import * as styles from "./PhoneInput.styles";

const countriesWithFlagsAndIds = allCountries.map(country => ({
  ...country,
  flagCode: countryToFlag(country.code),
  id: country.code
}));

const CountryFlagInputComponent = ({ value, placeholder }) => {
  const country = countriesWithFlagsAndIds.find(({ name }) => name === value);
  if (country) {
    return (
        <div css={styles.countryInput}>
          {country.flagCode} (+{country.phone})
        </div>
    );
  }
  return (
      <div css={styles.countryInput}>
        <Typography noWrap>{placeholder}</Typography>
      </div>
  );
};

CountryFlagInputComponent.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string
};

const propTypes = {
  someBoolean: PropTypes.bool
};

const defaultProps = {};

const PhoneInput = props => {


  const getCountryOption = country => (
    <Typography variant="inherit" noWrap>
      {country.flagCode} {country.name} (+{country.phone})
    </Typography>
  );


  const getCountrySelector = () => {
    return (
      <FilterSelect
        label={"country picker"}
        showLabel={false}
        disabled={false}
        dropDownIconLabel={"show options"}
        options={countriesWithFlagsAndIds}
        placeholder={"Pick a country"}
        renderOption={getCountryOption}
        inputComponent={CountryFlagInputComponent}
      />
    );
  };
  return (
    <TextField
      id={"some-id"}
      label={"bla"}
      disabled={false}
      error={false}
      fullWidth={false}
      placeholder={"Placeholder"}
      required={false}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {getCountrySelector()}
          </InputAdornment>
        )
      }}
    >
      <div>asdasdad</div>
    </TextField>
  );
};

PhoneInput.propTypes = propTypes;
PhoneInput.defaultProps = defaultProps;
export { PhoneInput };
