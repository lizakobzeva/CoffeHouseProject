import type { Meta, StoryObj } from "@storybook/react";
import NavBar from "./NavBar";
import { ThemDecorator } from "shared/config/storybook/StyleDecorator/ThemDecorator";
import { Theme } from "app/providers/ThemProvider/lib/ThemeContext";

const meta: Meta<typeof NavBar> = {
  component: NavBar,
};
export default {
  title: "widgets/NavBar",
};

type Story = StoryObj<typeof NavBar>;

export const Clear: Story = {
  render: () => <NavBar />,
};

export const Primary: Story = {
  render: () => <NavBar />,
};
Primary.decorators = [ThemDecorator(Theme.DARK)];
