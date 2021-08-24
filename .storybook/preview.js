import React from "react";
import "../src/global.css";
import goRightTheme from "./goright.theme";

export const parameters = {
  docs: {
    theme: goRightTheme,
  },
  options: {
    storySort: {
      order: ["Intro", "Color Palette", "Typography", "Components"],
    },
  },
  actions: { disable: true },
  creevey: {
    skip: {
      stories: ["Page"],
    },
  },
};
