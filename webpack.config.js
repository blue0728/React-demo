'use strict'

var path = require("path");
var AssetsPlugin = require('assets-webpack-plugin');
var assetsPluginInstance = new AssetsPlugin({
	path: path.join(__dirname, 'dist', '')
});
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var cdnPrefix = '',
	LOCALHOST_Prefix = 'http://haitao.com:8011/',
	TEST_Prefix = 'http://static.haibei.com:9100/wshop/',
	ONLINE_Prefix = 'http://res.haimi.com/wshop/',
	buildPath = '',
	publishPath = cdnPrefix + buildPath;

if (process.env.NODE_ENV == 'TEST') {
	cdnPrefix = TEST_Prefix;
} else if (process.env.NODE_ENV == 'ONLINE') {
	cdnPrefix = ONLINE_Prefix;
} else {
	buildPath = 'dist/',
		cdnPrefix = LOCALHOST_Prefix;
}

publishPath = cdnPrefix + buildPath;

console.log('当前环境:[' + (process.env.NODE_ENV || '本地') + ']\n当前路径:[' + publishPath + ']\n编译开始......');

module.exports = {
	entry: {
		app: ['./src/app.js']
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[hash].js",
		chunkFilename: "[id][chunkhash].js",
		publicPath: publishPath
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader?presets[]=es2015&presets[]=react'
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader")
		}, {
			test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: "url-loader?limit=10000&minetype=application/font-woff"
		}, {
			test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: "file-loader"
		}, {
			test: /\.(jpg|png|gif)$/,
			loader: "file-loader?name=images/[hash].[ext]"
		}]
	},
	plugins: [
		/*new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			sourceMap: false,
			mangle: false,
			compress: {
				warnings: false
			}
		}),*/
		new ExtractTextPlugin("[hash].css"),
		assetsPluginInstance,
		new HtmlWebpackPlugin({
			filename: '../index.html',
			template: 'template.html'
		})
	],
	resolve: {
		root: __dirname + '/src',
		extensions: ['', '.js'],
		alias: {

		}
	}
};