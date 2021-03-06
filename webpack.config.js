const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextWebpackPlugin = require('extract-text-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')

/**
 * 注意在配置了 extractCSS 之后，webpack-hot-deverser 不会起作用进行实时 hmr 了。
 * 因为相应的 module 根据就没有打包 css. 所以在配置时应该注意。
 */
 
let config = {
	entry: {
		app: './src/app.js'
	},

	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js'
	},

	resolve: {
		alias: {
			components: path.resolve(__dirname, './src/components'),
			api: path.resolve(__dirname, './src/api')
		},
		extensions: ['.js', '.vue']
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
				  presets: ['es2015']
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
				  postcss: [require('postcss-cssnext')()],
					extractCSS: process.env.NODE_ENV === 'production'
				}
			}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackPlugin({
			template: path.resolve(__dirname, './src/index.html'),
			inject: true
		}),
		// new extractTextWebpackPlugin('style.css'),
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

if (process.env.NODE_ENV === 'production') {
	config.plugins.push(new extractTextWebpackPlugin('style.css'))
}

module.exports = config