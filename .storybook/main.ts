import path from 'path';
import type { StorybookConfig } from '@storybook/react-vite';
import svgr from 'vite-plugin-svgr'; // ← 추가

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    '@storybook/addon-actions',
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias as Record<string,string>),
      '@': path.resolve(__dirname, '../src'),
    };

    config.plugins = [...(config.plugins || []), svgr()];

    return config;
  },

  }

export default config;


