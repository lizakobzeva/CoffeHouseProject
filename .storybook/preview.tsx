import type { Preview } from "@storybook/react";
// import "../src/app/styles/index.scss";
import { StyleDecorator } from "../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemDecorator } from "../src/shared/config/storybook/StyleDecorator/ThemDecorator";
import { RouteDecorator } from "../src/shared/config/storybook/StyleDecorator/RouteDecorator";
import { Theme } from "../src/app/providers/ThemProvider/lib/ThemeContext";
import React from "react";

const preview: Preview = {
  decorators: [StyleDecorator, ThemDecorator(Theme.LIGHT), RouteDecorator],
};

export default preview;
