import React from "react";
import PropTypes from "prop-types";
import { Popper, Paper } from "@material-ui/core";
import * as styles from "./ResultContainer.styles";

const propTypes = {
  children: PropTypes.node,
  anchorEl: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

const ResultContainer = ({ anchorEl, children }) => {
  if (!children) return null;

  return (
    <Popper
      role={undefined}
      open={!!children}
      anchorEl={anchorEl}
      disablePortal={true}
      css={styles.popper}
      modifiers={{
        flip: {
          enabled: true
        }
      }}
    >
      <Paper css={styles.paper}>{children}</Paper>
    </Popper>
  );
};
ResultContainer.propTypes = propTypes;
export { ResultContainer };
