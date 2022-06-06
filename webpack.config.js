const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;
const filename = (ext) =>
  isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;
module.exports = {
  // Входной файл
  entry: ["./src/js/index.js"],

  // Выходной файл
  output: {
    filename: "./js/bundle.js",
  },

  // Source maps для удобства отладки
  devtool: "source-map",

  module: {
    rules: [
      // Транспилируем js с babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src/js"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      // Компилируем SCSS в CSS
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          "css-loader", // translates CSS into CommonJS
          "postcss-loader", // parse CSS and add vendor prefixes to CSS rules
          "sass-loader", // compiles Sass to CSS, using Node Sass by default
        ],
      },

      // Подключаем шрифты из css
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        generator: {
          filename: () => {
            return isDev
              ? "fonts/[name][ext]"
              : "fonts/[name].[contenthash][ext]";
          },
        },
      },

      // Подключаем картинки из css
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        generator: {
          filename: () => {
            return isDev ? "img/[name][ext]" : "img/[name].[contenthash][ext]";
          },
        },
      },
    ],
  },
  plugins: [
    // Подключаем файл html, стили и скрипты встроятся автоматически
    new HtmlWebpackPlugin({
      title: "Webpack 4 Starter",
      template: "./src/index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),

    // Кладем стили в отдельный файлик
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),

    // Копируем картинки
    //new CopyWebpackPlugin([
    //  {
    //    from: "./src/img",
    //    to: "img",
    //  },
    //]),

    new CopyWebpackPlugin({
      patterns: [
        {
          //from: path.resolve(__dirname, "./src/img"),
          //to: path.resolve(__dirname, "img"),
          from: "./src/img",
          to: "img",
        },
      ],
    }),
  ],
};
