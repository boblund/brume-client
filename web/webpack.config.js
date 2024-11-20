const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = {
	mode: 'development',
	devtool: false,
	entry: [ path.join( __dirname, "files/main.mjs" ) ],
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
		} ]
	},
	resolve: {
		fallback: { path: require.resolve( "path-browserify" ) }
	},

	plugins: [
	// fix "process is not defined" error:
		new webpack.ProvidePlugin( {
			process: 'process/browser.js', // .js is needed
		} ),
	]
};
