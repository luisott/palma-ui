import React from "react";
import PropTypes from "prop-types";
import { Popper, Paper, ClickAwayListener } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import * as styles from "./SearchResultContainer.styles";

const propTypes = {
  open: PropTypes.bool.isRequired,
  onClickAway: PropTypes.func.isRequired,
  children: PropTypes.node,
  anchorEl: PropTypes.object
};

const SearchResultContainer = ({ open, onClickAway, anchorEl, children }) => {
  const theme = useTheme();
  return (
    <Popper
      role={undefined}
      open={open}
      anchorEl={anchorEl}
      disablePortal={true}
      placement="bottom-start"
      css={styles.popper(theme)}
    >
      <Paper>
        <ClickAwayListener onClickAway={onClickAway}>
          {children}
        </ClickAwayListener>
      </Paper>
    </Popper>
  );
};
SearchResultContainer.propTypes = propTypes;
export { SearchResultContainer };
