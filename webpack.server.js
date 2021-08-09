const path = require('path');
const NodeExternals = require('webpack-node-externals');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    mode,
    entry: path.resolve(__dirname, 'server/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist', 'server'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    externalsPresets: {
        node: true
    },
    externals: [NodeExternals()],
    devtool: 'source-map',
    devServer: {
        port: 5000,
        progress: true,
        open: false
    }
}