import React from "react";
import PropTypes from "prop-types";
import { allCountries, countryToFlag } from "../data/countries";
import Typography from "@material-ui/core/Typography";

import * as styles from "./PhoneInput.styles";
import { MenuItem } from "../MenuItem";
import { InputGroup, InputGroupInput, InputGroupSelect } from "../InputGroup";
import { getMenuProps } from "../Menu";

// TODO: MAke uncontrolled
// TODO: Format north american numbers with (XXX) XXX-XXXX and all others with XXXXXXXXXXXXXX
// TODO: Remove hardcoded strings for labels etc.
// TODO: Pass down options to do dense padding in both here and input group

const DEFAULT_COUNTRY_ID = "CA";

const countriesWithFlagsAndIds = allCountries.map(country => ({
  ...country,
  flagCode: countryToFlag(country.code),
  id: country.code
}));

const getCountryFromNumber = (
  value,
  preferredCountryId = DEFAULT_COUNTRY_ID
) => {
  const justDigits = getCleanNumber(value);
  if (justDigits === "") {
    return getCountryWithId(preferredCountryId);
  }
  const countriesWithCode = countriesWithFlagsAndIds.filter(({ phone }) =>
    justDigits.startsWith(phone)
  );
  if (countriesWithCode.length > 1 && preferredCountryId) {
    const preferredCountry = countriesWithCode.find(
      ({ id }) => id === preferredCountryId
    );
    if (preferredCountry) {
      return preferredCountry;
    }
  }
  return countriesWithCode[0];
};

const getCountryWithId = countryId =>
  countriesWithFlagsAndIds.find(({ id }) => id === countryId);

const getCleanNumber = phoneNumber => {
  return phoneNumber ? phoneNumber.replace(/\D/g, "") : "";
};

const getPhoneWithoutCountryCode = value => {
  const cleanNumber = getCleanNumber(value);
  const country = getCountryFromNumber(value);
  if (country) {
    return cleanNumber.replace(country.phone, "");
  }
  return cleanNumber;
};

const propTypes = {
  defaultCountryId: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  phoneNumber: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

const defaultProps = {
  defaultCountryId: DEFAULT_COUNTRY_ID
};

const PhoneInput = ({
  defaultCountryId,
  label,
  phoneNumber,
  onChange,
  disabled
}) => {
  const country = getCountryFromNumber(phoneNumber);
  const localNumber = getPhoneWithoutCountryCode(phoneNumber);

  const renderSelectedCountry = countryId => {
    const selectedCountry = getCountryWithId(countryId);
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

  const handleCountryChange = event => {
    onChange(`${event.target.value}${localNumber}`);
  };

  const handleLocalPhoneNumberChange = event => {
    onChange(`${country.phone}${event.target.value}`);
  };

  const commonMenuProps = getMenuProps(false, "left");
  const menuProps = {
    ...commonMenuProps,
    disablePortal: true
  };

  return (
    <InputGroup label={label} disabled={disabled}>
      <InputGroupSelect
        id={"country picker"}
        labelId={"country picker"}
        renderValue={renderSelectedCountry}
        MenuProps={menuProps}
        defaultValue={defaultCountryId}
        css={styles.menu}
        disabled={disabled}
        value={country?.id}
        onChange={handleCountryChange}
      >
        {getOptions()}
      </InputGroupSelect>
      <InputGroupInput
        id={"number"}
        disabled={disabled}
        value={localNumber}
        onChange={handleLocalPhoneNumberChange}
      />
    </InputGroup>
  );
};

PhoneInput.propTypes = propTypes;
PhoneInput.defaultProps = defaultProps;
export { PhoneInput };
