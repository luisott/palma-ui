import React from "react";

import { Tab } from "../Tabs/Tab";
import * as styles from "./AppBar.styles";

const AppBarTab = props => {
  return (
    <div css={styles.tab}>
      <Tab {...props} />
    </div>
  );
};

export { AppBarTab };
