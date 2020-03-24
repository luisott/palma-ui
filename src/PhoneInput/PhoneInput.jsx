import React from "react";
import PropTypes from "prop-types";
import { allCountries, countryToFlag } from "../data/countries";
import Typography from "@material-ui/core/Typography";

import * as styles from "./PhoneInput.styles";
import { MenuItem } from "../MenuItem";
import { InputGroup, InputGroupInput, InputGroupSelect } from "../InputGroup";
import { getMenuProps } from "../Menu";

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

  const commonMenuProps = getMenuProps();
  const menuProps = {
    ...commonMenuProps
  };

  return (
    <InputGroup>
      <InputGroupSelect
        id={"country picker"}
        labelId={"country picker"}
        renderValue={getCountryOption}
        MenuProps={menuProps}
        css={styles.menu}
        value={"AF"}
      >
        {getOptions()}
      </InputGroupSelect>
      <InputGroupInput id={"some-id"} label={"bla"} placeholder={"Placeholder"}>
        <div>asdasdad</div>
      </InputGroupInput>
    </InputGroup>
  );
};

PhoneInput.propTypes = propTypes;
PhoneInput.defaultProps = defaultProps;
export { PhoneInput };
