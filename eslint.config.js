import { includeIgnoreFile } from '@eslint/compat'
import nxEslintPlugin from '@nx/eslint-plugin'
import eslintPluginJsonc from 'eslint-plugin-jsonc'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const gitignorePath = path.resolve(__dirname, '.gitignore')

export default [
  includeIgnoreFile(gitignorePath),
  ...nxEslintPlugin.configs['flat/base'],
  ...nxEslintPlugin.configs['flat/typescript'],
  ...nxEslintPlugin.configs['flat/javascript'],
  ...eslintPluginJsonc.configs['flat/recommended-with-jsonc'],
  eslintPluginPrettierRecommended,
  {
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          allow: ['^.*/eslint.config.js']
        }
      ]
    }
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react'],
            ['^@?\\w'],
            ['^@hilson'],
            ['^\\.'],
            ['\\.styles$']
          ]
        }
      ],
      'simple-import-sort/exports': 'error'
    }
  },
  {
    rules: {
      'object-shorthand': 'error',
      'curly': ['error', 'multi-line', 'consistent'],
      'dot-notation': [
        'error',
        {
          allowPattern: '^[a-z]+(_[a-z]+)+$'
        }
      ],
      'arrow-body-style': ['error', 'as-needed'],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: [
            'class',
            'function',
            'const',
            'let',
            'return',
            'if',
            'switch',
            'for',
            'while',
            'export'
          ]
        },
        {
          blankLine: 'always',
          prev: [
            'class',
            'function',
            'const',
            'let',
            'return',
            'if',
            'switch',
            'for',
            'while',
            'directive'
          ],
          next: '*'
        },
        {
          blankLine: 'any',
          prev: 'directive',
          next: 'directive'
        },
        {
          blankLine: 'any',
          prev: 'export',
          next: 'export'
        }
      ],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' }
      ]
    }
  }
]
