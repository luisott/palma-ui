import React from "react";
// import { text, boolean, select } from "@storybook/addon-knobs";
import { SearchBar } from "./SearchBar";
import { boolean, select } from "@storybook/addon-knobs";
import { sizes } from "@types/sizes";

export default {
  title: "Components/SearchBar"
};

export const searchBar = () => (
  <SearchBar
    label={"search storybook"}
    placeholder={"Search..."}
    size={select("Size", sizes, sizes.MEDIUM)}
    withSurface={boolean("With Surface", false)}
    disabled={boolean("Disabled", false)}
  />
);
