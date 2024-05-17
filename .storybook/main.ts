import type { StorybookConfig } from "@storybook/react-webpack5";
import path, { resolve } from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: "automatic",
        },
      },
    },
  }),
  webpackFinal: async (config) => {
    config?.resolve?.extensions?.push(".ts", "tsx");
    config?.resolve?.modules?.push(path.resolve(__dirname, "..", "src"));
    config?.module?.rules?.push({
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: (resPath: string) => Boolean(resPath.includes(".module.")),
              localIdentName: "[path][name]__[local]",
            },
          },
        },
        "sass-loader",
      ],
    });

    return config;
  },
};
export default config;
