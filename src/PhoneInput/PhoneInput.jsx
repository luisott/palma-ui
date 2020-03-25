import React from "react";
import PropTypes from "prop-types";
import { allCountries, countryToFlag } from "../data/countries";
import Typography from "@material-ui/core/Typography";

import * as styles from "./PhoneInput.styles";
import { MenuItem } from "../MenuItem";
import { InputGroup, InputGroupInput, InputGroupSelect } from "../InputGroup";
import { getMenuProps } from "../Menu";

// TODO: Add label
// TODO: MAke uncontrolled
// TODO: Format north american numbers with (XXX) XXX-XXXX and all others with XXXXXXXXXXXXXX

const countriesWithFlagsAndIds = allCountries.map(country => ({
  ...country,
  flagCode: countryToFlag(country.code),
  id: country.code
}));

const propTypes = {
  someBoolean: PropTypes.bool,
  defaultCountryId: PropTypes.string
};

const defaultProps = {
  defaultCountryId: "CA"
};

const PhoneInput = ({ defaultCountryId }) => {
  const getSelectedCountry = countryId => {
    const selectedCountry = countriesWithFlagsAndIds.find(
      ({ id }) => id === countryId
    );
    if (!selectedCountry) {
      return null;
    }
    return (
      <Typography variant="inherit" noWrap>
        {selectedCountry.flagCode} (+{selectedCountry.phone})
      </Typography>
    );
  };

  const getOptions = () => {
    return countriesWithFlagsAndIds.map(country => (
      <MenuItem key={country.id} value={country.id}>
        <div css={styles.countryMenuItem}>
          {country.flagCode} {country.name} (+{country.phone})
        </div>
      </MenuItem>
    ));
  };

  const commonMenuProps = getMenuProps(false, "left");
  const menuProps = {
    ...commonMenuProps,
    disablePortal: true
  };

  return (
    <InputGroup>
      <InputGroupSelect
        id={"country picker"}
        labelId={"country picker"}
        renderValue={getSelectedCountry}
        MenuProps={menuProps}
        defaultValue={defaultCountryId}
        css={styles.menu}
      >
        {getOptions()}
      </InputGroupSelect>
      <InputGroupInput id={"some-id"} placeholder={"Placeholder"}>
        <div>asdasdad</div>
      </InputGroupInput>
    </InputGroup>
  );
};

PhoneInput.propTypes = propTypes;
PhoneInput.defaultProps = defaultProps;
export { PhoneInput };
