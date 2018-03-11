const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');



var BUILD_DIR = path.resolve(__dirname, '/public');
var APP_DIR = path.resolve(__dirname, '/src');


module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),

    output: {
        /*
         path: BUILD_DIR,
         filename: 'bundle.js'
         */
        path : path.join(__dirname, '/public'),
        filename : 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [ 'babel-loader?presets[]=react,presets[]=es2015'],

            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff2?|otf)$/,
                use: 'file-loader'
            }
        ]
    }
    /*
    ,plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
            //,favicon: path.join(__dirname, 'public', 'favicon.ico')
        })
    ]
    */
};
