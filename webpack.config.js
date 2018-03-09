const path = require("path");

module.exports = {
    entry: ["babel-polyfill", path.resolve(__dirname,'./src/index.js')],
    output: {
        filename: "main.js",
        path: __dirname + "/public"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                enforce: "pre",
                test: /\.jsx?$/,
                loader: "source-map-loader"
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader?sourceMap"]
            },
        ],
    }
};