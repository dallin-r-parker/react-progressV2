const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const VENDOR_LIBS = ['react', 'react-dom', 'react-router']

module.exports = {
	entry: {
		bundle: './src/index.js',
		vendor: VENDOR_LIBS
	},
	output: {
		path: path.join(__dirname, 'bundle'),
		filename: '[name].[chunkhash].js'
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: [
					{loader: 'style-loader' },
					{loader:'css-loader', options: { sourceMap: true }},
					{loader:'sass-loader', options: { sourceMap: true }}
				]
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest']
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]
}