import React, { useState } from "react";
import PropTypes from "prop-types";
import { Popper, Paper, ClickAwayListener } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import * as styles from "./ResultContainer.styles";

const propTypes = {
  onClickAway: PropTypes.func.isRequired,
  children: PropTypes.node,
  anchorEl: PropTypes.object,
  onCreate: PropTypes.func
};

const ResultContainer = ({ onClickAway, anchorEl, children, onCreate }) => {
  const theme = useTheme();
  const [flipped, setFlipped] = useState(false);

  const handleOnCreatePopper = data => {
    data.instance.disableEventListeners();
    setFlipped(data.flipped);
    onCreate && onCreate(data.flipped);
  };

  if (!children) return null;

  return (
    <Popper
      role={undefined}
      open={!!children}
      anchorEl={anchorEl}
      disablePortal={true}
      css={[styles.popper(theme).base, flipped && styles.popper(theme).openTop]}
      popperOptions={{
        onCreate: handleOnCreatePopper
      }}
    >
      <Paper css={[styles.paper.base, flipped && styles.paper.openTop]}>
        <ClickAwayListener onClickAway={onClickAway}>
          {children}
        </ClickAwayListener>
      </Paper>
    </Popper>
  );
};
ResultContainer.propTypes = propTypes;
export { ResultContainer };
