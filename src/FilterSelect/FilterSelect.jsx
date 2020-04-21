import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import { ExpandMore, ExpandLess } from "@material-ui/icons";
import { MenuList, ClickAwayListener } from "@material-ui/core";
import { MenuItem } from "../MenuItem";

import { IconButton } from "../IconButton";
import { ResultContainer } from "./ResultContainer";
import { TextField } from "../TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useResultsKeyboardNavigation } from "../../src/utils";

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
      id: PropTypes.string.isRequired,
    })
  ),
  /**
   * Optional renderer for options
   * @param option
   * @returns a string or a component with the value to show
   */
  renderOption: PropTypes.func,
  /**
   * Options to pass to the Popper component (https://material-ui.com/components/popper/)
   */
  popperOptions: PropTypes.object,
  /**
   * Elevation property for the paper component (https://material-ui.com/api/paper/)
   */
  elevation: PropTypes.number,
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
  popperOptions,
  elevation,
  ...rest
}) => {
  const [value, setValue] = useState("");
  const [optionsToShow, setOptionsToShow] = useState(options);
  const [openResults, setOpenResults] = useState(false);
  const containerRef = useRef();
  const focusedItemRef = useRef();

  const onEnterCallback = () => {
    pickOption(optionsToShow[focusedItemIndex]);
  };

  const handleCloseResults = () => {
    setOpenResults(false);
  };

  const { focusedItemIndex, onKeyDown } = useResultsKeyboardNavigation(
    optionsToShow?.length || 0,
    containerRef,
    null,
    onEnterCallback,
    null,
    handleCloseResults
  );

  useEffect(() => {
    if (focusedItemRef && focusedItemRef.current) {
      // focusedItemRef.current.scrollIntoView(false);
      focusedItemRef.current.scrollIntoView(false);
    }
  }, [focusedItemIndex]);

  const handleInputChange = (e) => {
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

  const pickOption = (option) => {
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
        {optionsToShow.map((option, index) => (
          <MenuItem
            key={option.id}
            innerRef={focusedItemIndex === index ? focusedItemRef : null}
            onClick={() => pickOption(option)}
            selected={option.name === value || focusedItemIndex === index}
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
      <InputAdornment position="end">
        <IconButton
          size={"small"}
          aria-label={dropDownIconLabel}
          onClick={openAllResults}
          disabled={disabled}
          edge={"end"}
        >
          {openResults ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </InputAdornment>
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

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setOpenResults(false);
    } else {
      onKeyDown(event);
    }
  };

  return (
    <div ref={containerRef} onKeyDown={handleKeyDown}>
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
              endAdornment: getDropDownIcon(),
            }}
            {...rest}
          />
        </div>
      </ClickAwayListener>
      <ResultContainer
        anchorEl={containerRef?.current}
        elevation={elevation}
        {...popperOptions}
      >
        {getOptions()}
      </ResultContainer>
    </div>
  );
};

FilterSelect.propTypes = propTypes;
export { FilterSelect };
