import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  index: PropTypes.number.isRequired,
  ariaLabelPrefix: PropTypes.string.isRequired,
  currentTab: PropTypes.number.isRequired
};

const TabPanel = ({ ariaLabelPrefix, index, currentTab, ...rest }) => {
  return (
    <div
      role="tabpanel"
      hidden={currentTab !== index}
      id={`${ariaLabelPrefix}-tabpanel-${index}`}
      aria-labelledby={`${ariaLabelPrefix}-tab-${index}`}
      {...rest}
    />
  );
};

TabPanel.propTypes = propTypes;
export { TabPanel };
