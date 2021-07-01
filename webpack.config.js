"use strict";
/*
 * This webpack config is used for production build of components library
 */
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const paths = {
  libSrc: path.resolve(__dirname, "src"),
  libIndex: [path.resolve(__dirname, "src/index.js")],
  libOutputDir: path.resolve(__dirname, "dist"),
  libModules: path.resolve(__dirname, "../node_modules"),
};

module.exports = (_, argv) => {
  const exts = [
    nodeExternals({
      allowlist: /react-multi-carousel/,
    }),
  ];

  const env = argv.mode;

  process.env.BABEL_ENV = env;
  process.env.NODE_ENV = env;

  let libraryName = "design-system";
  let plugins = [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "styles.css",
    }),
    new webpack.NamedModulesPlugin(),
  ];

  return {
    entry: paths.libIndex,
    devtool: "source-map",
    output: {
      path: paths.libOutputDir,
      filename: libraryName + ".js",
      libraryTarget: "commonjs",
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          /* Don"t use style-loader if you will impport library into Next.js */
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          // Apply rule for fonts files
          test: /\.(woff|woff2|ttf|otf|eot)$/,
          use: [
            {
              // Using file-loader too
              loader: "file-loader",
              options: {
                outputPath: "fonts",
                publicPath: "fonts",
              },
            },
          ],
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          use: ["url-loader?limit=10000", "img-loader"],
        },
        {
          test: /\.svg$/,

          issuer: {
            test: /\.(js|ts)x?$/,
          },
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                svgoConfig: {
                  plugins: {
                    removeViewBox: false,
                  },
                },
              },
            },
            "file-loader",
          ],
        },
      ],
    },
    externals: exts,
    plugins: plugins,
    node: {
      fs: "empty",
    },
  };
};
