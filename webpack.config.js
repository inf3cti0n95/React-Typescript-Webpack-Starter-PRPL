var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const PreloadWebpackPlugin = require('preload-webpack-plugin');

var fs = require('fs')
var stringify = require('json-stringify-safe');



module.exports = {
    context: path.resolve(__dirname, "app"),
    devServer: {
        historyApiFallback: true,
        inline: true 
        },
    entry: {
        index: './index.tsx',
        vendor: ['react','react-dom'] //,'react-router','redux','react-redux','gsap','react-addons-transition-group'
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        path: path.resolve(__dirname, 'dist/assets')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.sass']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'string-replace-loader',
                        options: {
                            search: /_import/g,
                            replace: 'import'
                        }
                    },
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'ts-loader'
                    },
                ],
                exclude: /node_modules/
            },
            {
                test: /(\.css|\.sass)$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(gif|png|jpg|jpeg\ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: 'file-loader'
            }
        ],
        
    },
    plugins: [

        // new webpack.DefinePlugin({
        // 'process.env': {
        //     NODE_ENV: JSON.stringify('production')
        // }
        // }),
        new CommonsChunkPlugin({
            name: ['commons', 'vendor', 'bootstrap'],
        }),
        new HtmlWebpackPlugin({
            title: 'React Router + Webpack 2 + Dynamic Chunk Navigation',
            template: `${path.resolve(__dirname, 'app')}/index.ejs`,
        }),


        function () {
            const compiler = this;
		    const chunkRegEx = /\.chunk.js$/;
		    compiler.plugin('compilation', function(compilation) {
		      compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, cb) {
		        // find all chunk file names
		        const extractedChunks = compilation
		          .chunks
		          .reduce((chunks, chunk) => chunks.concat(chunk.files), [])
		          .filter(chunk => chunkRegEx.test(chunk));
		        // create a stringified version of the array
		        const json = JSON.stringify(extractedChunks);

		        // inject chunks into the html
		        htmlPluginData.html = htmlPluginData.html.replace('window.__CHUNKS=[];', `window.__CHUNKS=${json}`);
		        cb(null, htmlPluginData);
		      });
		    });
        },
        // new webpack.optimize.UglifyJsPlugin({ mangle: true, compress: { warnings: false }}),
    ]
}
