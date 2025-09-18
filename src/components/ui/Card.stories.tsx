import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold">Card Title</h3>
        <p className="text-sm text-gray-600">This is a sample card body.</p>
      </div>
    ),
  },
};
