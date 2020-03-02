import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import * as styles from "./FilterSelect.styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { MenuItem, MenuList, InputBase, InputLabel } from "@material-ui/core";
import { IconButton } from "@components/IconButton/IconButton";
import { ResultContainer } from "./ResultContainer/ResultContainer";
import { SelectContainer } from "./SelectContainer/SelectContainer";
import { formInputLabel } from "@styles/commonStyles";

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
  ).isRequired,
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
  const [resultsOrientationFlipped, setResultsOrientationFlipped] = useState(
    false
  );
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
    if (options.length === 0) {
      return null;
    }
    return (
      <IconButton
        size={"small"}
        aria-label={dropDownIconLabel}
        onClick={openAllResults}
        disabled={disabled}
      >
        <ExpandMoreIcon />
      </IconButton>
    );
  };

  const openAllResults = () => {
    if (!disabled) {
      setOptionsToShow(options);
      setOpenResults(true);
    }
  };

  return (
    <div>
      {showLabel && (
        <InputLabel disabled={disabled} css={formInputLabel}>
          {label}
        </InputLabel>
      )}
      <SelectContainer
        openResultsTop={resultsOrientationFlipped}
        openResults={openResults}
        disabled={disabled}
      >
        <div css={styles.container} ref={ref}>
          <InputBase
            placeholder={placeholder}
            inputProps={{ "aria-label": label }}
            onChange={handleInputChange}
            value={value}
            disabled={disabled}
            css={styles.inputBase}
            onClick={openAllResults}
            {...props}
          />
          {getDropDownIcon()}
        </div>
        <ResultContainer
          anchorEl={ref?.current}
          onClickAway={handleCloseResults}
          onCreate={flipped => setResultsOrientationFlipped(flipped)}
        >
          {getOptions()}
        </ResultContainer>
      </SelectContainer>
    </div>
  );
};

FilterSelect.propTypes = propTypes;
export { FilterSelect };
