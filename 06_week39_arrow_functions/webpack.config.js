const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/app.js",
    output: {
        filename: "[name].bundle.[contenthash:8].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Lab 6 Week 39: Arrow Functions - ES6.",
            metaDesc: "Laboration 6, week 39. Arrow functions in ES6.",
            template: "./src/index.html",
            filename: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "styles.[contenthash:8].css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: () => [require("autoprefixer")],
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        static: path.resolve(__dirname, "dist"),
        hot: true,
        port: 8080,
        watchFiles: ["src/**/*.*"],
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
};
