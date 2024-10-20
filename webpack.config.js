const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // або 'production', залежно від етапу розробки
    entry: './src/pages/index.js', // основний файл JavaScript
    output: {
        path: path.resolve(__dirname, 'dist'), // вихідна директорія для згенерованих файлів
        filename: 'bundle.js', // назва згенерованого файлу
    },
    stats: {
        errorDetails: true, // Додаємо для відображення деталей помилок
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'], // для обробки .css файлів
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader', // для обробки .scss файлів
                ],
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader', // для обробки .less файлів
                ],
            },
            {
                test: /\.styl$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'stylus-loader', // для обробки .styl файлів
                ],
            },
            {
                test: /\.html$/,
                use: ['html-loader'], // для обробки HTML файлів
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css', // назва згенерованих CSS файлів
        }),
        // Генеруємо сторінку index.html
        new HtmlWebpackPlugin({
            template: './src/pages/index.html', // шлях до шаблону index.html
            filename: 'index.html', // назва вихідного файлу
        }),
        // Генеруємо сторінку biography.html
        new HtmlWebpackPlugin({
            template: './src/pages/biography.html', // шлях до шаблону biography.html
            filename: 'biography.html', // назва вихідного файлу
        }),
        // Генеруємо сторінку schedule.html
        new HtmlWebpackPlugin({
            template: './src/pages/schedule.html', // шлях до шаблону schedule.html
            filename: 'schedule.html', // назва вихідного файлу
        }),
        // Генеруємо сторінку news.html
        new HtmlWebpackPlugin({
            template: './src/pages/news.html', // шлях до шаблону news.html
            filename: 'news.html', // назва вихідного файлу
        }),
    ],
    resolve: {
        extensions: ['.js', '.scss', '.less', '.styl'], // які файли можна імпортувати без зазначення розширення
    },
    devtool: 'source-map', // для генерації карт джерел
};