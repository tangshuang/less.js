const { DefinePlugin } = require('webpack')

module.exports = {
  mode: 'none',
  module: {
    unknownContextCritical : false,
  },
  experiments: {
    outputModule: true,
  },
  entry: __dirname + '/es/web/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'web.js',
    library: {
      type: "module",
    },
    chunkFormat: 'module',
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    })
  ],
}
