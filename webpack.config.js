module.exports = {
    entry: "./main.ts",
    output: { 
            //path: 'dist',
            filename: "bundle.js"
        },
    module: {
            loaders: [
                {
                    test: /.ts$/,
                    exclude: /node_modules/,
                    loader: "ts-loader"
                }
            ]

    },
    resolve: {
         extensions: ["", ".ts", ".js"]
    }

}