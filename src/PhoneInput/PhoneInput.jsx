import React from "react";
import PropTypes from "prop-types";
import { TextField } from "../TextField";
import { allCountries, countryToFlag } from "../data/countries";
import Typography from "@material-ui/core/Typography";

import * as styles from "./PhoneInput.styles";
import { Select } from "../Select";
import { MenuItem } from "../MenuItem";

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
  const getCountryOption = countryId => (
    <Typography variant="inherit" noWrap>
      {countryId}
    </Typography>
  );

  const getOptions = () => {
    return countriesWithFlagsAndIds.map(country => (
      <MenuItem key={country.id} id={country.id}>
        {country.flagCode} {country.name} (+{country.phone})
      </MenuItem>
    ));
  };

  return (
    <div>
      <Select
        id={"country picker"}
        labelId={"country picker"}
        disabled={false}
        renderValue={getCountryOption}
        value={"AF"}
      >
        {getOptions()}
      </Select>
      <TextField
        id={"some-id"}
        label={"bla"}
        disabled={false}
        error={false}
        fullWidth={false}
        placeholder={"Placeholder"}
        required={false}
      >
        <div>asdasdad</div>
      </TextField>
    </div>
  );
};

PhoneInput.propTypes = propTypes;
PhoneInput.defaultProps = defaultProps;
export { PhoneInput };
