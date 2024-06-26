import { StoryObj, Meta } from "@storybook/react";
import Badge, { BadgeType } from "@components/Badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
};
export default meta;
type Story = StoryObj<typeof Badge>;

const getArgTypes = () => {
  return {
    type: {
      options: ["Primary", "Secondary", "Success", "Warning", "Danger"],
      mapping: {
        Primary: BadgeType.PRIMARY,
        Secondary: BadgeType.NEUTRAL,
        Success: BadgeType.SUCCESS,
        Warning: BadgeType.WARNING,
        Error: BadgeType.DANGER,
      },
    },
  };
};
export const Primary: Story = {
  args: {
    type: BadgeType.PRIMARY,
    label: "Primary",
  },
  argTypes: getArgTypes(),
};

export const Neutral: Story = {
  args: {
    type: BadgeType.NEUTRAL,
    label: "Neutral",
  },
  argTypes: getArgTypes(),
};

export const Success: Story = {
  args: {
    type: BadgeType.SUCCESS,
    label: "Success",
  },
  argTypes: getArgTypes(),
};

export const Warning: Story = {
  args: {
    type: BadgeType.WARNING,
    label: "Warning",
  },
  argTypes: getArgTypes(),
};

export const Danger: Story = {
  args: {
    type: BadgeType.DANGER,
    label: "Danger",
  },
  argTypes: getArgTypes(),
};
