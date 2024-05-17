import type { Meta, StoryObj } from "@storybook/react";
import ToggleThemButton from "./ToggleThemButton";
import { ThemDecorator } from "shared/config/storybook/StyleDecorator/ThemDecorator";
import { Theme } from "app/providers/ThemProvider/lib/ThemeContext";

const meta: Meta<typeof ToggleThemButton> = {
  component: ToggleThemButton,
};

export default {
  title: "widgets/ToggleThemButton",
};
type Story = StoryObj<typeof ToggleThemButton>;

export const Clear: Story = {
  render: () => <ToggleThemButton />,
};

export const Primary: Story = {
  render: () => <ToggleThemButton />,
};
Primary.decorators = [ThemDecorator(Theme.DARK)];
