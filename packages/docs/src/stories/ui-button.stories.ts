import "../../../core/dist/components/button/button";
// import "../../../styles/src/components/index.css";

export default {
  title: "Components/Button",
};

export const Default = () => `<ui-button>Default</ui-button>`;

export const Dark = () => {
  document.documentElement.setAttribute("theme", "dark");
  return `<ui-button>Dark</ui-button>`;
};
