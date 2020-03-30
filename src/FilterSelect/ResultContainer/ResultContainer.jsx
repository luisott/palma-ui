import React from "react";
import PropTypes from "prop-types";
import { Popper, Paper } from "@material-ui/core";
import * as styles from "./ResultContainer.styles";

const propTypes = {
  children: PropTypes.node,
  anchorEl: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

const ResultContainer = ({ anchorEl, children, ...rest }) => {
  if (!children) return null;

  return (
    <Popper
      open={!!children}
      anchorEl={anchorEl}
      disablePortal={false}
      css={styles.popper}
      placement={"bottom-start"}
      modifiers={{
        flip: {
          enabled: true
        }
      }}
      {...rest}
    >
      <Paper css={styles.paper}>{children}</Paper>
    </Popper>
  );
};
ResultContainer.propTypes = propTypes;
export { ResultContainer };
