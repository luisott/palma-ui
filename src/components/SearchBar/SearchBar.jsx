import React from "react";
import PropTypes from "prop-types";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";

import * as styles from "./SearchBar.styles";
import { useTheme } from "@material-ui/core/styles";
import { SIZES } from "@types/sizes";

const propTypes = {
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * Needed for accessibility
   */
  label: PropTypes.string.isRequired,

  placeholder: PropTypes.string
};

const defaultProps = {};

const SearchBar = ({ label, size, placeholder, ...props }) => {
  const theme = useTheme();

  return (
    <div css={[styles.container(theme).base, styles.container(theme)[size]]}>
      <div css={styles.searchIcon}>
        <SearchIcon color={"disabled"} />
      </div>
      <InputBase
        placeholder={placeholder}
        inputProps={{ "aria-label": label }}
        {...props}
      />
    </div>
  );
};

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;
export { SearchBar };
