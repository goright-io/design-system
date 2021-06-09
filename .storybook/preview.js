import React from "react";
import "../src/global.css";

export const parameters = {
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
