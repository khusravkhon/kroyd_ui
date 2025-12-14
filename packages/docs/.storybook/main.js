module.exports = {
  stories: ["../src/**/*.stories.@(js|ts)"],
  staticDirs: ["../public"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
};
