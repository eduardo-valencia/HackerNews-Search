module.exports = {
  rules: [
    {
      test: /\.(s*)css$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }
  ]
}
