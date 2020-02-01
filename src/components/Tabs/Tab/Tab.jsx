import React from "react";
import MaterialTab from "@material-ui/core/Tab";

import * as styles from "./Tab.styles";
import PropTypes from "prop-types";

const propTypes = {
  index: PropTypes.number.isRequired,
  ariaLabelPrefix: PropTypes.string.isRequired
};

const Tab = ({ ariaLabelPrefix, index, ...rest }) => {
  const a11yProps = {
    id: `${ariaLabelPrefix}-tab-${index}`,
    "aria-controls": `${ariaLabelPrefix}-tabpanel-${index}`
  };

  return <MaterialTab css={styles.tabStyle} {...a11yProps} {...rest} />;
};

Tab.propTypes = propTypes;
export default Tab;
