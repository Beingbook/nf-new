import React from "react";
import { themeClass } from "../src/theme";

export const parameters = {
  backgrounds: {
    grid: {
      cellSize: 8,
      opacity: 0.25,
      cellAmount: 5,
    },
  },
};

export const decorators = [
  (Story) => (
    <div className={themeClass}>
      <Story />
    </div>
  )
];
