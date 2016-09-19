module.exports = {
  entry: './src/app.js',
  output: {
    path: './dist/',
    filename: 'app.js',
    publicPath: '/dist/'
  },
  devtool: '#source-map',
  devServer: {
    contentBase: './',
    port:3000
  },
  module: {
    preloaders: [
      {
        teset: /\.js$/,
        exclue: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        teset: /\.js$/,
        exclue: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  }
};
