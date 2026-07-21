import type { Preview } from "@storybook/react";
import "../src/styles.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: { expanded: true },
    a11y: { test: "error" },
    backgrounds: {
      default: "VERDEA Canvas",
      values: [
        { name: "VERDEA Canvas", value: "#FAFAF8" },
        { name: "White", value: "#FFFFFF" },
        { name: "Forest", value: "#032C1B" }
      ]
    }
  }
};

export default preview;
