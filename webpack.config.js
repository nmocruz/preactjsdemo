const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader"
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        /*alias: {
            preact: path.resolve(__dirname, 'node_modules', 'preact'),
            "preact/hooks": path.resolve(__dirname, 'node_modules', 'preact', 'hooks')
        }*/
    },
 
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'public')   
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'src/template.html',
        inject: 'body'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    host: '127.0.0.1',
    https: true,
    port: 9000,
  },
};