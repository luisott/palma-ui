import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import * as styles from "./FilterSelect.styles";
import { useTheme } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  ClickAwayListener,
  MenuItem,
  MenuList,
  InputBase
} from "@material-ui/core";
import { colorVariations } from "@types";
import { IconButton } from "@components/IconButton/IconButton";

const propTypes = {
  /**
   * Needed for accessibility
   */
  label: PropTypes.string.isRequired,

  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  onOptionSelected: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  )
};

const defaultProps = {
  activeBorderColor: colorVariations.NONE
};

const FilterSelect = ({
  label,
  placeholder,
  options,
  onChange,
  disabled,
  onOptionSelected,
  ...props
}) => {
  const theme = useTheme();
  const [value, setValue] = useState("");
  const [optionsToShow, setOptionsToShow] = useState(options);
  const [openResults, setOpenResults] = useState(false);
  const ref = useRef();

  const handleInputChange = e => {
    setValue(e.target.value);
    if (e.target.value) {
      const filteredOptions = options.filter(
        ({ title }) => title.toLowerCase().indexOf(value.toLowerCase()) > -1
      );
      setOptionsToShow(filteredOptions);
      setOpenResults(true);
    } else {
      setOptionsToShow(options);
      setOpenResults(false);
    }
  };

  const handleCloseResults = () => {
    setOpenResults(false);
  };

  const pickOption = option => {
    setOpenResults(false);
    setValue(option.title);
    if (onOptionSelected) {
      onOptionSelected(option);
    }
  };

  const getOptions = () => {
    if (!openResults || optionsToShow.length === 0) {
      return null;
    }

    return (
      <MenuList id="menu-list-grow">
        {optionsToShow.map(option => (
          <MenuItem
            key={option.id}
            onClick={() => pickOption(option)}
            selected={option.title === value}
          >
            {option.title}
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
        aria-label={"show options"}
        onClick={openAllResults}
      >
        <ExpandMoreIcon />
      </IconButton>
    );
  };

  const openAllResults = () => {
    setOptionsToShow(options);
    setOpenResults(true);
  };

  return (
    <ClickAwayListener onClickAway={handleCloseResults}>
      <div
        ref={ref}
        css={[
          styles.containerWrapper(theme),
          disabled && styles.containerWrapper(theme).disabled
        ]}
      >
        <div css={styles.container}>
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
        {getOptions()}
      </div>
    </ClickAwayListener>
  );
};

FilterSelect.propTypes = propTypes;
FilterSelect.defaultProps = defaultProps;
export { FilterSelect };
