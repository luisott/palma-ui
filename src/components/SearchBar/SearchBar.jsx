import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";
import Close from "@material-ui/icons/Close";

import * as styles from "./SearchBar.styles";
import { useTheme } from "@material-ui/core/styles";
import { sizes } from "@types/sizes";
import { IconButton } from "@components/IconButton/IconButton";

const propTypes = {
  size: PropTypes.oneOf(Object.values(sizes)),
  /**
   * Needed for accessibility
   */
  label: PropTypes.string.isRequired,

  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  withSurface: PropTypes.bool
};

const defaultProps = {};

const SearchBar = ({
  label,
  size,
  placeholder,
  onChange,
  withSurface,
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
    <div
      css={[
        styles.container(theme).base,
        withSurface && styles.container(theme).withSurface,
        styles.container(theme)[size]
      ]}
    >
      <div css={[styles.searchIcon.base, styles.searchIcon[size]]}>
        <SearchIcon color={"disabled"} />
      </div>
      <InputBase
        placeholder={placeholder}
        inputProps={{ "aria-label": label }}
        onChange={handleInputChange}
        value={value}
        css={styles.inputBase[size]}
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
  );
};

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;
export { SearchBar };
