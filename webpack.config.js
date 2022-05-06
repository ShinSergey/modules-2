const path = require("path")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "result"),
    },
    module: {
        rules: [
            {
                 test: /\.js$/ ,
                 loader: "raw-loader"
        }
        ]
    }
}