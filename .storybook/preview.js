import React from "react";
import "../src/global.css";

const withGlobalStyle = (storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

export const decorators = [withGlobalStyle];

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
