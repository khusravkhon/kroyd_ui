import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "UI/Button",
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "error", "error_outline", "success"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj;

export const Playground: Story = {
  args: {
    variant: "primary",
    size: "md",
    disabled: false,
    children: "Click me",
  },
  render: (args) => `
  <div
    style="
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    "
  >
    <ui-button
      variant="${args.variant}"
      size="${args.size}"
      ${args.disabled ? "disabled" : ""}
    >
      ${args.children}
    </ui-button>
  </div>
`,
};
