import React from "react";
import PropTypes from "prop-types";
import { Popper, Paper, ClickAwayListener } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import * as styles from "./ResultContainer.styles";

const propTypes = {
  onClickAway: PropTypes.func.isRequired,
  children: PropTypes.node,
  anchorEl: PropTypes.object
};

const ResultContainer = ({ onClickAway, anchorEl, children }) => {
  const theme = useTheme();
  return (
    <Popper
      role={undefined}
      open={!!children}
      anchorEl={anchorEl}
      disablePortal={true}
      css={[styles.popper(theme).base, styles.popper(theme).openBottom]}
    >
      {children && (
        <Paper css={[styles.paper.base, styles.paper.openBottom]}>
          <ClickAwayListener onClickAway={onClickAway}>
            {children}
          </ClickAwayListener>
        </Paper>
      )}
    </Popper>
  );
};
ResultContainer.propTypes = propTypes;
export { ResultContainer };
