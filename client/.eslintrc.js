module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': 'plugin:react/recommended',
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': ['warn', 2],
    'quotes': ['warn', 'single'],
    'no-unused-vars': 'warn',
    'no-console': [
      'warn',
      {
        'allow': ['warn', 'error']
      }
    ],
    'max-len': [
      'warn',
      {
        'code': 100
      }
    ]
  }
}
