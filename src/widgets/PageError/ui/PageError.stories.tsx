import type { Meta, StoryObj } from "@storybook/react";
import PageError from "./PageError";
import { ThemDecorator } from "shared/config/storybook/StyleDecorator/ThemDecorator";
import { Theme } from "app/providers/ThemProvider/lib/ThemeContext";

const meta: Meta<typeof PageError> = {
  component: PageError,
};

export default {
  title: "widgets/PageError",
};
type Story = StoryObj<typeof PageError>;

export const Clear: Story = {
  render: () => <PageError />,
};

export const Primary: Story = {
  render: () => <PageError />,
};
Primary.decorators = [ThemDecorator(Theme.DARK)];
