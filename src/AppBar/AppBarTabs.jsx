import React from "react";

import { Tabs } from "../Tabs";
import * as styles from "./AppBar.styles";

const AppBarTabs = props => {
  return <Tabs css={styles.tabs} {...props} />;
};

export { AppBarTabs };
