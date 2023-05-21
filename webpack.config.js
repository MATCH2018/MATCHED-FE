const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

module.exports = {
  entry: './src/main.js', // 엔트리 파일 경로
  output: {
    path: path.resolve(__dirname, 'dist'), // 빌드된 파일의 출력 경로
    filename: 'bundle.js', // 빌드된 파일의 이름
  },
  module: {
    rules: [
      // 로더 설정
      {
        test: /\.js$/, // 대상 파일 확장자
        exclude: /node_modules/, // 제외할 디렉토리
        use: 'babel-loader', // 사용할 로더
      },
      {
        test:/\.vue$/,
        loader: 'vue-loader'
      },
      {
        test:/\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test:/\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js'], // 해석할 파일 확장자
  },
  mode: 'development', // 개발 모드
  plugins: [
    new VueLoaderPlugin()
  ]
};
