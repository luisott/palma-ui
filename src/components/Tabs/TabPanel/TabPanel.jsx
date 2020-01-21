import React from "react";
import PropTypes from "prop-types";

const props = {
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

TabPanel.props = props;
export default TabPanel;
