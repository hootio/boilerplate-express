module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    '@babel/transform-runtime',
    '@babel/plugin-transform-strict-mode',
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    [
      '@babel/plugin-proposal-private-methods',
      {
        loose: true
      }
    ]
  ]
};
