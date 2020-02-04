import React from "react";
import { Tabs as MaterialTabs } from "@material-ui/core";

import * as styles from "./Tabs.styles";

const Tabs = props => <MaterialTabs css={styles.tabsStyle} {...props} />;

export { Tabs };
