var path = require("path");

module.exports = {
	//entry: ['/Users/blund/Documents/swdev/webview-nodejs-apps/x-browserBrume/main.mjs'], //[path.join(__dirname, "cip.mjs")],
	mode: 'development',
	devtool: false,
	entry: [path.join(__dirname, "files/cognitoAuth.mjs")],
	output: {
		library: 'Cognito',
		path: __dirname,
		filename: 'files/cognitoAuth.js'
	},
	resolve:{
		fallback: { path: require.resolve("path-browserify")}
	}
};
