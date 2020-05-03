import React from "react";
import PropTypes from "prop-types";
import { ExpandMore } from "@material-ui/icons";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Paper, Popper } from "@material-ui/core";

import { TextField } from "../TextField";
import * as styles from "./FilterSelect.styles";
import useTheme from "@material-ui/core/styles/useTheme";

const ResultContainer = (props) => {
  const theme = useTheme();
  return <Popper css={styles.popper(theme)} {...props} />;
};

const propTypes = {
  /**
   * Needed for accessibility
   */
  label: PropTypes.string.isRequired,
  showLabel: PropTypes.bool,
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
   * Props applied to the input `TextField` component
   */
  inputProps: PropTypes.object,
  /**
   * Elevation property for the paper component (https://material-ui.com/api/paper/)
   */
  elevation: PropTypes.number,
};

const FilterSelect = ({
  label,
  options,
  onOptionSelected,
  renderOption,
  showLabel,
  inputProps,
  elevation,
  ...rest
}) => {
  const ResultContainerPaper = (props) => (
    <Paper css={styles.paper} elevation={elevation} {...props} />
  );

  return (
    <Autocomplete
      id={label}
      PopperComponent={ResultContainer}
      PaperComponent={ResultContainerPaper}
      options={options}
      size={"small"}
      getOptionLabel={(option) => option.name}
      renderOption={renderOption}
      popupIcon={<ExpandMore />}
      renderInput={(params) => (
        <TextField
          id={`${label}-textInput`}
          label={showLabel ? label : null}
          {...params}
          {...inputProps}
        />
      )}
      {...rest}
    />
  );
};

FilterSelect.propTypes = propTypes;
export { FilterSelect };
