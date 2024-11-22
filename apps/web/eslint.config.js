import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import eslintJs from '@eslint/js'
import nxEslintPlugin from '@nx/eslint-plugin'
import path from 'path'
import { fileURLToPath } from 'url'

import baseConfigs from '../../eslint.config.js'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslintJs.configs.recommended
})

const configs = [
  ...fixupConfigRules(compat.extends('next')),
  ...fixupConfigRules(compat.extends('next/core-web-vitals')),
  ...nxEslintPlugin.configs['flat/react-typescript'],
  ...baseConfigs,
  { ignores: ['.next/**/*'] },
  {
    rules: {
      'import/no-useless-path-segments': [
        'error',
        {
          'noUselessIndex': true
        }
      ],
      'react/prop-types': 'off',
      'react/jsx-sort-props': [
        'error',
        {
          'callbacksLast': true,
          'reservedFirst': true
        }
      ],
      'react/jsx-curly-brace-presence': [
        'error',
        {
          'props': 'never',
          'children': 'never'
        }
      ]
    }
  }
]

export default configs
