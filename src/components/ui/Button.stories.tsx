import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

// Hover state demo
export const Hover: Story = {
  args: {
    children: "Hover Me",
    variant: "primary",
  },
  parameters: {
    pseudo: { hover: true },
  },
};

// Focus state demo
export const Focus: Story = {
  args: {
    children: "Focus Me",
    variant: "primary",
  },
  parameters: {
    pseudo: { focus: true },
  },
};
