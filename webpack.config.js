const { resolve } = require('path');

module.exports = { 
    entry: '/src/main.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\\.(png|jpe?g|gif|mp3)$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
};