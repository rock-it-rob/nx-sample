import nx from '@nx/eslint-plugin';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/react'],
  {
    ignores: ['**/out-tsc', '**/.next/**/*', '**/next-env.d.ts'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[jt]s$'],
          depConstraints: [
            {
              sourceTag: 'app',
              onlyDependOnLibsWithTags: ['lib:*'],
              allowedExternalImports: [
                'next*',
                'react*',
                '@fontsource/roboto/*.css',
              ],
            },
            {
              sourceTag: 'lib:*',
              onlyDependOnLibsWithTags: ['lib:*'],
            },
          ],
        },
      ],
      'react-hooks/exhaustive-deps': 'error',
    },
  },
]);
