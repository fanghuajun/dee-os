/**
 * @description 开发环境webpack配置
 * @author alfred
 * @date 2018-02-26
 * 
 */

const path = require('path');
const	webpack = require('webpack');
const	webpackMerge = require('webpack-merge');

const	HtmlWebpackPlugin = require('html-webpack-plugin');
const	FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const	AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const baseWebpackConfig = require('./webpack.base.config');
const	{ nowConfig, commonsChunkName } = require('./util');

const config = nowConfig();

const commonsChunk = commonsChunkName();

module.exports = webpackMerge(baseWebpackConfig, {
	devtool: '#cheap-module-eval-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': config.env
		}),

		new webpack.HotModuleReplacementPlugin(),

		new webpack.NoEmitOnErrorsPlugin(),

		new FriendlyErrorsPlugin()
	].concat(config.template.map(template => {
		let chunkPath = template.split(path.sep).slice(-2)[0];
		let chunkName= template.split(path.sep).slice(-1)[0];
		chunkName=chunkName.split(".")[0];

		return new HtmlWebpackPlugin({
			filename: path.join(chunkPath,chunkName + '.html'),
			template: template,
			chunks: [chunkPath].concat(commonsChunk),
			chunksSortMode: function(chunk1, chunk2) {
				let
					entrys = Object.keys(config.entry),
					vendors = commonsChunk;

				let 
					orders = ['manifest'].concat(vendors, entrys),
					order1 = orders.indexOf(chunk1.names[0]),
					order2 = orders.indexOf(chunk2.names[0]);

				if (order1 > order2) {
				    return 1;
				} else if (order1 < order2) {
				    return -1;
				} else {
				    return 0;
				}
			}
		});
	}))
})