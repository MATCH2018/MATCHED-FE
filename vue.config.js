const path = require('path')
module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '^/stomp': {
        target: 'http://13.124.173.243:8080',
        ws:true,
        changeOrigin:true
      }
    }
  },
  configureWebpack: {
    mode: 'development',
    entry: './src/main.js',
    extentions: ['.js', '.vue', 'json'],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'src')
    }
  },
}