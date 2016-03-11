var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/app.js',
    ],
    output: {
      path: path.resolve(__dirname, "./static/"),
      publicPath: "/static/",
      filename: "main.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                    "react-hot",
                    "babel?presets[]=stage-0,presets[]=react,presets[]=es2015",
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: "sourcemap"
}
