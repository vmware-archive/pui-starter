import ExtractTextPlugin from 'extract-text-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import NoEmitOnErrorsPlugin from 'webpack/lib/NoEmitOnErrorsPlugin';
import DefinePlugin from 'webpack/lib/DefinePlugin';
import HtmlWebpackIncludeAssetsPlugin from 'html-webpack-include-assets-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJsPlugin from 'webpack/lib/optimize/UglifyJsPlugin';
import path from 'path';

const nodeModulesCss = new ExtractTextPlugin('components.css');
const applicationCss = new ExtractTextPlugin('[name].css');

export default function () {
  return {
    entry: {
      application: ['babel-polyfill', './app/index.js']
    },
    module: {
      rules: [
        {
          test: /\.(eot|ttf|woff)$/,
          use: 'url-loader'
        },
        {
          test: /\.css$/,
          include: /node_modules/,
          oneOf: [
            {test: /html-webpack-plugin/, use: 'null-loader'},
            {use: nodeModulesCss.extract('css-loader')},
          ]
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          oneOf: [
            {test: /html-webpack-plugin/, use: 'null-loader'},
            {use: applicationCss.extract(['css-loader', 'postcss-loader', 'sass-loader'])},
          ]
        },
        {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
      ]
    },
    output: {filename: '[name]-[hash].js', chunkFilename: '[id].js', publicPath: '/'},
    plugins: [
      new DefinePlugin({'process.env': {'NODE_ENV': '"production"'}}),
      new NoEmitOnErrorsPlugin(),
      new HtmlWebpackPlugin({title: 'ReactStarter', template: 'app/index.jsx'}),
      new HtmlWebpackIncludeAssetsPlugin({assets: ['config.js'], append: false, hash: true}),
      nodeModulesCss,
      applicationCss,
      new ManifestPlugin(),
      new UglifyJsPlugin({
        compressor: {screw_ie8: true, warnings: false},
        mangle: {screw_ie8: true},
        output: {comments: false, screw_ie8: true}
      })
    ],
    stats: {colors: true, cached: false}
  };
};