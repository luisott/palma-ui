import React from "react";
import PropTypes from "prop-types";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase, MenuList } from "@material-ui/core";
import useAutocomplete from "@material-ui/lab/useAutocomplete";

import * as styles from "./SearchBar.styles";
import { useTheme } from "@material-ui/core/styles";
import { sizes } from "@types";
import { MenuItem } from "../MenuItem";

const propTypes = {
  size: PropTypes.oneOf(Object.values(sizes)),
  activeBorderColor: PropTypes.oneOf(["primary", "secondary", "error"]),
  /**
   * Needed for accessibility
   */
  label: PropTypes.string.isRequired,

  placeholder: PropTypes.string,

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
  withSurface: PropTypes.bool,
  disabled: PropTypes.bool,
};

const SearchBar = ({
  label,
  size,
  placeholder,
  withSurface,
  activeBorderColor,
  disabled,
  options,
  ...props
}) => {
  const theme = useTheme();

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: label,
    options: options,
    getOptionLabel: (option) => option.name,
  });

  return (
    <div
      css={[
        styles.containerWrapper(theme).base,
        styles.containerWrapper(theme)[activeBorderColor],
        withSurface && styles.containerWrapper(theme).withSurface,
        disabled && styles.containerWrapper(theme).disabled,
        activeBorderColor &&
          styles.containerWrapper(theme, activeBorderColor).withBorder,
      ]}
    >
      <div
        css={[styles.container.base, styles.container[size]]}
        {...getRootProps()}
      >
        <div css={[styles.searchIcon.base, styles.searchIcon[size]]}>
          <SearchIcon color={"disabled"} />
        </div>
        <InputBase
          placeholder={placeholder}
          inputProps={{ "aria-label": label }}
          css={[styles.inputBase.base, styles.inputBase[size]]}
          disabled={disabled}
          {...props}
          {...getInputProps()}
        />
      </div>
      {groupedOptions.length > 0 ? (
        <MenuList {...getListboxProps()} css={styles.menuList(theme)}>
          {groupedOptions.map((option, index) => (
            // eslint-disable-next-line react/jsx-key
            <MenuItem
              css={styles.menuItem}
              {...getOptionProps({ option, index })}
            >
              {option.name}
            </MenuItem>
          ))}
        </MenuList>
      ) : null}
    </div>
  );
};

SearchBar.propTypes = propTypes;
export { SearchBar };
