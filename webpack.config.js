/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

'use strict';

/* eslint-env node */

const path = require('path');
const webpack = require('webpack');
const { bundler, styles } = require('@ckeditor/ckeditor5-dev-utils');
const CKEditorWebpackPlugin = require('@ckeditor/ckeditor5-dev-webpack-plugin');

module.exports = {
	// Set mode to development to disable default optimizations
	mode: 'development',

	devtool: 'source-map',
	performance: { hints: false },

	entry: path.resolve(__dirname, 'src', 'ckeditor.js'),

	output: {
		library: 'ClassicEditor',
		path: path.resolve(__dirname, 'build'),
		filename: 'ckeditor.js',
		libraryTarget: 'umd',
		libraryExport: 'default'
	},

	// Remove the TerserPlugin minimizer
	optimization: {
		minimize: false
	},

	plugins: [
		new CKEditorWebpackPlugin({
			language: 'en-gb',
			additionalLanguages: 'all'
		}),
		new webpack.BannerPlugin({
			banner: bundler.getLicenseBanner(),
			raw: true
		})
	],

	module: {
		rules: [
			{
				test: /\.svg$/,
				use: ['raw-loader']
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							injectType: 'singletonStyleTag',
							attributes: {
								'data-cke': true
							}
						}
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: styles.getPostCssConfig({
								themeImporter: {
									themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
								},
								// Disable CSS minification
								minify: false
							})
						}
					},
				]
			}
		]
	}
};
