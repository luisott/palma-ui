import React from "react";
import PropTypes from "prop-types";
import { Popper, Paper } from "@material-ui/core";
import * as styles from "./ResultContainer.styles";
import useTheme from "@material-ui/core/styles/useTheme";

const propTypes = {
  children: PropTypes.node,
  anchorEl: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

const ResultContainer = ({ anchorEl, children, ...rest }) => {
  const theme = useTheme();
  if (!children) return null;

  return (
    <Popper
      open={!!children}
      anchorEl={anchorEl}
      disablePortal={false}
      css={styles.popper(theme)}
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
