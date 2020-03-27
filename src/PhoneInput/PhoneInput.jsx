import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getAllCountriesWithFlagMap } from "../data/countries";
import Typography from "@material-ui/core/Typography";
import InputMask from "react-input-mask";

import * as styles from "./PhoneInput.styles";
import { MenuItem } from "../MenuItem";
import { InputGroup, InputGroupInput, InputGroupSelect } from "../InputGroup";
import { getMenuProps } from "../Menu";

// TODO: Remove hardcoded strings for labels etc.
// TODO: Scroll down to selected
// TODO: Search by text

const DEFAULT_COUNTRY_ID = "CA";

const countriesWithFlagsMap = getAllCountriesWithFlagMap();

const getCountryFromNumber = (
  value,
  preferredCountryId = DEFAULT_COUNTRY_ID
) => {
  const cleanNumber = getCleanNumber(value);
  if (cleanNumber === "") {
    return countriesWithFlagsMap[preferredCountryId];
  }
  const countriesWithCode = Object.keys(countriesWithFlagsMap).filter(code =>
    cleanNumber.startsWith(code)
  );
  if (countriesWithCode.length === 0) {
    return countriesWithFlagsMap[preferredCountryId];
  }
  if (countriesWithCode.length > 1 && preferredCountryId) {
    const preferredCountryCode = countriesWithCode.find(
      code => code === preferredCountryId
    );
    if (preferredCountryCode) {
      return countriesWithFlagsMap[preferredCountryCode];
    }
  }
  return countriesWithFlagsMap[countriesWithCode[0]];
};

// Get rid of all non numbers except - as it's used for some caribbean islands
// to share the 1 with US and CA (e.g. US Virgin Islands use 1-340)
const getCleanNumber = phoneNumber => {
  return phoneNumber ? phoneNumber.replace(/[^0-9-]/g, "") : "";
};

const getPhoneWithoutCountryCode = value => {
  const cleanNumber = getCleanNumber(value);
  const country = getCountryFromNumber(value);
  if (country) {
    return cleanNumber.replace(country.phone, "");
  }
  return cleanNumber;
};

const menuProps = {
  ...getMenuProps(false, "left"),
  disablePortal: true
};

const countryMenuItems = Object.keys(countriesWithFlagsMap).map(countryCode => (
  <MenuItem key={countryCode} value={countryCode}>
    <div css={styles.countryMenuItem}>
      {countriesWithFlagsMap[countryCode].flagCode}{" "}
      {countriesWithFlagsMap[countryCode].name} (+
      {countriesWithFlagsMap[countryCode].phone})
    </div>
  </MenuItem>
));

const propTypes = {
  /**
   * When two countries share the same country code (e.g. US and CA) which one to prefer
   * initially when this component tried to decode initialPhoneNumber
   */
  defaultCountryId: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  /**
   * A string but we are going to strip out anything that's not a number from it
   */
  initialPhoneNumber: PropTypes.string,
  /**
   * Returns a string with the new phone number (all numbers in the string)
   */
  onChange: PropTypes.func
};

const defaultProps = {
  defaultCountryId: DEFAULT_COUNTRY_ID
};

const PhoneInput = ({
  defaultCountryId,
  label,
  initialPhoneNumber,
  onChange,
  disabled,
  ...rest
}) => {
  const [country, setCountryCode] = useState(
    getCountryFromNumber(initialPhoneNumber)
  );
  const [localNumber, setLocalNumber] = useState(
    getPhoneWithoutCountryCode(initialPhoneNumber)
  );

  useEffect(() => {
    setCountryCode(getCountryFromNumber(initialPhoneNumber));
    setLocalNumber(getPhoneWithoutCountryCode(initialPhoneNumber));
  }, [initialPhoneNumber]);

  const renderSelectedCountry = countryId => {
    const selectedCountry = countriesWithFlagsMap[countryId];
    if (!selectedCountry) {
      return null;
    }
    return (
      <Typography variant="inherit" noWrap>
        {selectedCountry.flagCode} (+{selectedCountry.phone})
      </Typography>
    );
  };

  const handleCountryChange = event => {
    const selectedCountry = countriesWithFlagsMap[event.target.value];
    setCountryCode(selectedCountry);
    onChange && onChange(`${selectedCountry.phone}${localNumber}`);
  };

  const handleLocalPhoneNumberChange = event => {
    setLocalNumber(event.target.value);
    onChange &&
      onChange(`${country.phone}${event.target.value.replace(/\D/g, "")}`);
  };

  const inputMask =
    country.code === "US" || country.code === "CA"
      ? "(999) 999-9999"
      : "999999999999999"; // 15 digits max for any phone number
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
        value={country.code}
        onChange={handleCountryChange}
      >
        {countryMenuItems}
      </InputGroupSelect>
      <InputMask
        mask={inputMask}
        value={localNumber}
        onChange={handleLocalPhoneNumberChange}
        disabled={disabled}
        maskPlaceholder={null}
        alwaysShowMask={true}
      >
        <InputGroupInput id={"number"} type={"tel"} {...rest} />
      </InputMask>
    </InputGroup>
  );
};

PhoneInput.propTypes = propTypes;
PhoneInput.defaultProps = defaultProps;
export { PhoneInput };
