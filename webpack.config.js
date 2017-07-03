const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextWebpackPlugin = require('extract-text-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')
 
module.exports = {
	entry: {
		app: './src/app.js'
	},

	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js'
	},

	resolve: {
		alias: {
			components: path.resolve(__dirname, './src/components')
		},
		extensions: ['.js', '.vue']
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					extractCSS: true
				}
			}
		]
	},

	plugins: [
		new htmlWebpackPlugin({
			template: path.resolve(__dirname, './src/index.html'),
			inject: true
		}),
		new extractTextWebpackPlugin('style.css'),
		new copyWebpackPlugin([
			{
				from: path.resolve(__dirname, './src/static'),
				to: path.resolve(__dirname, './dist/'),
			}
		])
	],

	devServer: {
		port: process.env.PORT || 3303
	}
}