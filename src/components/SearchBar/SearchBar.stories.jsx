import React from "react";
// import { text, boolean, select } from "@storybook/addon-knobs";
import { SearchBar } from "./SearchBar";
import { select } from "@storybook/addon-knobs";
import { SIZES } from "@types/sizes";

export default {
  title: "Components/SearchBar"
};

export const searchBar = () => (
  <SearchBar
    label={"search storybook"}
    placeholder={"Search..."}
    size={select("Size", SIZES, SIZES.MEDIUM)}
  />
);
