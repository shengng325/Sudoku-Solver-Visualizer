module.exports = {
    entry: './src/index.js',
    module: {
      rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    resolve: {
      extensions: ['*', '.js']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist'
    }
  };