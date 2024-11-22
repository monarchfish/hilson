import nx from '@nx/eslint-plugin'

import baseConfigs from '../../eslint.config.js'

export default [
  ...baseConfigs,
  ...nx.configs['flat/react'],
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
