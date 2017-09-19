const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		bundle: './src/index.js'
	},
	output: {
		path: path.join(__dirname, 'bundle'),
		filename: '[name].js'
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
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]
}