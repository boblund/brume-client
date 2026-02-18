// webpack.config.js
const path = require( 'path' );
const webpack = require( 'webpack' );
const packageJson = require( './package.json' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
	target: 'web',
	entry: `./index.mjs`,
	output: {
		filename: `index.bundle-${ packageJson.version }.js`,
		path: path.resolve( __dirname, 'dist' ),
		chunkLoading: false,
		clean: true
	},
	optimization: {
		splitChunks: false,
		runtimeChunk: false,
	},
	externals: [
		// Exclude all .node files from the bundle
		function( { request }, callback ) {
			if ( /\.node$/.test( request ) ) {
				return callback( null, 'commonjs ' + request );
			}
			callback();
		}
	],
	mode: 'production', //'development', //
	devtool: false, //'source-map', //
	resolve: {
		fallback: {
			process: require.resolve( 'process/browser' )
		}
	},
	plugins: [
		new webpack.ProvidePlugin( {
			process: 'process/browser.js'
		} ),
		new webpack.BannerPlugin( {
			banner: '#!/usr/bin/env node',
			raw: true,
		} ),
		new HtmlWebpackPlugin( {
			template: 'index.html', // your HTML template file
			favicon: 'favicon.ico', // your favicon file
		} )
	],
	module: {
		rules: [
			{
				test: /\.css$/, // for CSS files
				exclude: /common\.css/,
				issuer: /index\.mjs$/,
				use: [ 'style-loader', 'css-loader' ], // inject CSS and interpret imports
			},
			{
				test: /common\.css$/,
				use: [
					{
						loader: 'css-loader',
						options: {
							exportType: 'css-style-sheet',
							esModule: true
						}
					}
				]
			},
			{
				test: /\.(ico|png|svg|jpg|jpeg|gif)$/i, // for favicon and images
				type: 'asset/resource', // emits a separate file and exports the URL
			},
			{
				test: /.(mjs|js)$/,
				use: [
					{ loader: "ifdef-loader", options: {
						WEBPACK: true,
						"ifdef-uncomment-prefix": "// #code "
					} }
				]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
				}
			}
		],
	},
};
