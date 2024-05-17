import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";
import { ThemDecorator } from "shared/config/storybook/StyleDecorator/ThemDecorator";
import { Theme } from "app/providers/ThemProvider/lib/ThemeContext";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default {
  title: "shared/BurgerMenu",
};
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
  render: () => <Button>Button</Button>,
};

export const Primary: Story = {
  render: () => <Button>Button</Button>,
};
Primary.decorators = [ThemDecorator(Theme.DARK)];
