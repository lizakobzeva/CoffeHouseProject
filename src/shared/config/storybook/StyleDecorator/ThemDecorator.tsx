import "app/styles/index.scss";
import { Decorator } from "@storybook/react";
import { Theme } from "app/providers/ThemProvider/lib/ThemeContext";

export const ThemDecorator =
  (theme: Theme): Decorator =>
  (Story) => (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
