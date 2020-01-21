import React from "react";
import MaterialTabs from "@material-ui/core/Tabs";

import * as styles from "./Tabs.styles";

const Tabs = props => <MaterialTabs css={styles.tabsStyle} {...props} />;

export default Tabs;
