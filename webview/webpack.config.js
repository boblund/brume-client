const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = {
	mode: 'development',
	devtool: false,
	entry: [ path.join( __dirname, "./main.mjs" ) ],
	//entry: [ path.join( __dirname, "../browser/main.mjs" ) ],
	output: {
		path: `${ __dirname }/dist/`,
		filename: 'main.js'
	},
	module: {
		rules: [ {
			use: [
				{ loader: "ifdef-loader", options: {
					WEBPACK: true,
					"ifdef-uncomment-prefix": "// #code "
				} }
			]
		},
		{
			test: /\.m?js$/,
			enforce: 'pre',
			use: [ 'source-map-loader' ]
		} ]
	},
	optimization: {
		splitChunks: false,
		runtimeChunk: false,
	},
	resolve: {
		fallback: {
			path: require.resolve( "path-browserify" ),
			"crypto": false
		}
	},

	plugins: [
	// fix "process is not defined" error:
		new webpack.ProvidePlugin( {
			process: 'process/browser.js', // .js is needed
		} ),
		new webpack.optimize.LimitChunkCountPlugin( {
			maxChunks: 1, // Forces all code and assets into one chunk
		} )
	]
};
