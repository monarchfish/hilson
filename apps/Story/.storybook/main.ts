import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import { StorybookConfig } from '@storybook/nextjs'
import react from '@vitejs/plugin-react'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../../../ui/src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  docs: {
    autodocs: 'tag'
  },
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },

  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [react(), nxViteTsPaths()]
    })
}

export default config

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
