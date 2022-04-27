const mix = require('laravel-mix');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/js/app.tsx', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css')
    .webpackConfig({
        module: {
          rules: [
            {
              test: /\.tsx?$/,
              loader: "ts-loader",
              exclude: /node_modules/
            }
          ]
        },
        resolve: {
          extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"]
        }
    });
