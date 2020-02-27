import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchIcon from "@material-ui/icons/Search";
import { ClickAwayListener, InputBase } from "@material-ui/core";
import Close from "@material-ui/icons/Close";

import * as styles from "./SearchBar.styles";
import { useTheme } from "@material-ui/core/styles";
import { sizes, colorVariations } from "@types";
import { IconButton } from "@components/IconButton/IconButton";

const propTypes = {
  size: PropTypes.oneOf(Object.values(sizes)),
  activeBorderColor: PropTypes.oneOf(Object.values(colorVariations)),
  /**
   * Needed for accessibility
   */
  label: PropTypes.string.isRequired,

  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  withSurface: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClickAway: PropTypes.func
};

const defaultProps = {
  activeBorderColor: colorVariations.NONE
};

const SearchBar = ({
  label,
  size,
  placeholder,
  onChange,
  withSurface,
  children,
  activeBorderColor,
  disabled,
  onClickAway,
  ...props
}) => {
  const theme = useTheme();
  const [value, setValue] = useState("");

  const handleInputChange = e => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleClearSearch = () => {
    setValue("");
    if (onChange) {
      onChange("");
    }
  };

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <div
        css={[
          styles.containerWrapper(theme).base,
          styles.containerWrapper(theme)[activeBorderColor],
          withSurface && styles.containerWrapper(theme).withSurface,
          disabled && styles.containerWrapper(theme).disabled
        ]}
      >
        <div css={[styles.container.base, styles.container[size]]}>
          <div css={[styles.searchIcon.base, styles.searchIcon[size]]}>
            <SearchIcon color={"disabled"} />
          </div>
          <InputBase
            placeholder={placeholder}
            inputProps={{ "aria-label": label }}
            onChange={handleInputChange}
            value={value}
            css={[styles.inputBase.base, styles.inputBase[size]]}
            disabled={disabled}
            {...props}
          />
          {!!value && (
            <IconButton
              size={"small"}
              aria-label={"close"}
              onClick={handleClearSearch}
            >
              <Close />
            </IconButton>
          )}
        </div>
        {children}
      </div>
    </ClickAwayListener>
  );
};

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;
export { SearchBar };
