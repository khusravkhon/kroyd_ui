import "../../tokens/dist/index.css";
import "../../core/dist/kroyd-ui-core.mjs";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", title: "☀️ Light" },
        { value: "dark", title: "🌙 Dark" },
      ],
      showName: true,
    },
  },
};

const preview = {
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;

      document.documentElement.setAttribute("data-theme", theme);

      return Story();
    },
  ],
};

export default preview;
