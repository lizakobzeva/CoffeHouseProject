import type { Meta, StoryObj } from "@storybook/react";
import LoginRegisterForm from "./LoginRegisterForm";
import { ThemDecorator } from "shared/config/storybook/StyleDecorator/ThemDecorator";
import { Theme } from "app/providers/ThemProvider/lib/ThemeContext";
import Modal from "shared/ui/Modal";

const meta: Meta<typeof LoginRegisterForm> = {
  component: LoginRegisterForm,
};

export default {
  title: "widgets/LoginRegisterForm",
};
type Story = StoryObj<typeof LoginRegisterForm>;

export const Clear: Story = {
  render: () => (
    <Modal isOpend={true}>
      <LoginRegisterForm />
    </Modal>
  ),
};

export const Primary: Story = {
  render: () => (
    <Modal isOpend={true}>
      <LoginRegisterForm />
    </Modal>
  ),
};
Primary.decorators = [ThemDecorator(Theme.DARK)];
