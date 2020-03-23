import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import { ExpandMore, ExpandLess } from "@material-ui/icons";
import { MenuList, ClickAwayListener } from "@material-ui/core";
import { MenuItem } from "../MenuItem";

import { IconButton } from "../IconButton";
import { ResultContainer } from "./ResultContainer";
import { TextField } from "../TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

const propTypes = {
  /**
   * Needed for accessibility
   */
  label: PropTypes.string.isRequired,
  dropDownIconLabel: PropTypes.string.isRequired,

  showLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onOptionSelected: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Used for filtering
       * If no renderOption this is the value rendered in the options
       */
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ),
  /**
   * Optional renderer for options
   * @param option
   * @returns a string or a component with the value to show
   */
  renderOption: PropTypes.func
};

const FilterSelect = ({
  label,
  placeholder,
  options,
  disabled,
  onOptionSelected,
  renderOption,
  showLabel,
  dropDownIconLabel,
  ...props
}) => {
  const [value, setValue] = useState("");
  const [optionsToShow, setOptionsToShow] = useState(options);
  const [openResults, setOpenResults] = useState(false);
  const ref = useRef();

  const handleInputChange = e => {
    const newValue = e.target.value;
    if (newValue) {
      const filteredOptions = options.filter(({ name }) =>
        name.toLowerCase().includes(newValue.toLowerCase())
      );
      setOptionsToShow(filteredOptions);
      setOpenResults(true);
    } else {
      setOptionsToShow(options);
    }
    setValue(newValue);
  };

  const handleCloseResults = () => {
    setValue("");
    setOpenResults(false);
  };

  const pickOption = option => {
    setOpenResults(false);
    setValue(option.name);
    if (onOptionSelected) {
      onOptionSelected(option);
    }
  };

  const shouldShowOptions = openResults && optionsToShow.length > 0;

  const getOptions = () => {
    if (!shouldShowOptions) {
      return null;
    }

    return (
      <MenuList id="menu-list-grow">
        {optionsToShow.map(option => (
          <MenuItem
            key={option.id}
            onClick={() => pickOption(option)}
            selected={option.name === value}
            autoFocus={option.name === value}
          >
            {renderOption ? renderOption(option) : option.name}
          </MenuItem>
        ))}
      </MenuList>
    );
  };

  const getDropDownIcon = () => {
    if (!options || options.length === 0) {
      return null;
    }
    return (
      <IconButton
        size={"small"}
        aria-label={dropDownIconLabel}
        onClick={openAllResults}
        disabled={disabled}
      >
        {openResults ? <ExpandLess /> : <ExpandMore />}
      </IconButton>
    );
  };

  const openAllResults = () => {
    if (!disabled) {
      if (!openResults) {
        setOptionsToShow(options);
      }
      setOpenResults(!openResults);
    }
  };

  return (
    <div ref={ref}>
      <ClickAwayListener onClickAway={handleCloseResults}>
        <div>
          <TextField
            id={label}
            label={showLabel ? label : null}
            placeholder={placeholder}
            onChange={handleInputChange}
            value={value}
            disabled={disabled}
            onClick={openAllResults}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {getDropDownIcon()}
                </InputAdornment>
              )
            }}
            {...props}
          />
        </div>
      </ClickAwayListener>
      <ResultContainer anchorEl={ref?.current}>{getOptions()}</ResultContainer>
    </div>
  );
};

FilterSelect.propTypes = propTypes;
export { FilterSelect };
