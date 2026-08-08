import nextConfig from 'eslint-config-next'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import tseslint from 'typescript-eslint'

const eslintConfig = [
  {
    ignores: [
      '.next/**',
      'out/**',
      'node_modules/**',
      'next-env.d.ts',
      'components/LanguageSwitcher.jsx',
      'components/Link.jsx',
      'lib/getStatic.js',
      'lib/languageDetector.js',
      'lib/redirect.js',
    ],
  },
  ...nextConfig,
  ...tseslint.configs.recommended,
  prettierRecommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react-hooks/exhaustive-deps': 'off',
      // eslint-plugin-react-hooks v7 (pulled in by eslint-config-next 16) adds these
      // React Compiler-readiness rules. They flag real pre-existing patterns (setState
      // in effects, a styled() call re-created every render, Math.random() during
      // render, reading a ref during render) that predate this dependency upgrade and
      // would need behavioral changes to fix properly, not just a lint pass. Downgraded
      // to warnings so `next build`'s React Compiler support can be adopted later
      // without silently losing this signal.
      'react-hooks/set-state-in-effect': 'warn',
      'react-hooks/purity': 'warn',
      'react-hooks/refs': 'warn',
      'react-hooks/static-components': 'warn',
    },
  },
]

export default eslintConfig
