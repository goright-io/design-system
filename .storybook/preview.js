import React from "react";
import "../src/global.css";

export const parameters = {
  options: {
    storySort: {
      order: ["Intro", "Typography", "Color Palette", "Components"],
    },
  },
  actions: { disable: true },
  creevey: {
    skip: {
      stories: ["Page"],
    },
  },
};
