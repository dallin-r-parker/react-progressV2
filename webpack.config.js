const webpack = require('webpack')
const path = require('path')

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
				use: ['style-loader', 'css-loader', 'sass-loader'],
				test: /\.scss$/,
			}
		]
	}
}