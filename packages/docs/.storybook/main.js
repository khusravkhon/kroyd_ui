const path = require("path");

module.exports = {
  stories: [
    path.resolve(__dirname, "../src/**/*.stories.@(js|ts)"),
    path.resolve(__dirname, "../../core/src/**/*.stories.@(js|ts)"),
  ],
  staticDirs: [path.resolve(__dirname, "../public")],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
};
