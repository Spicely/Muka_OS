const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const withLess = require('./less.config.js');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const WatchIgnorePlugin = require('webpack/lib/WatchIgnorePlugin');
const config = require('./config.json');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => { }
}

module.exports = withTypescript(withCSS(withLess({
    target: 'server',
    // useFileSystemPublicRoutes: false,
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: config.modify
    },
    generateBuildId: async () => {
        // For example get the latest git commit hash here
        return '201904181600'
    },
    webpack(config, options) {

        config.resolve = config.resolve || {};
        config.resolve.plugins = config.resolve.plugins || [];
        config.resolve.plugins.push();
        config.plugins.push(new WatchIgnorePlugin([
            /css\.d\.ts$/
        ]))
        config.resolve.plugins.push(new TsConfigPathsPlugin({
            configFile: './tsconfig.json',
        }));
        config.plugins.push(new LodashModuleReplacementPlugin());
        return config;
    },
})));