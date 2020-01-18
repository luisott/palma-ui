const paths = require("../config/paths");

module.exports = {
  stories: ["../src/**/*.stories.js", "../src/**/*.stories.jsx"],
  webpackFinal: config => {
    // Copy pasted this from webpack.config.js
    // TODO: Import the config here instead
    config.module.rules.push({
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      include: paths.appSrc,
      loader: require.resolve("babel-loader"),
      options: {
        customize: require.resolve("babel-preset-react-app/webpack-overrides"),
        presets: [require.resolve("@emotion/babel-preset-css-prop")],
        plugins: [
          [
            require.resolve("babel-plugin-named-asset-import"),
            {
              loaderMap: {
                svg: {
                  ReactComponent: "@svgr/webpack?-svgo,+titleProp,+ref![path]"
                }
              }
            }
          ]
        ],
        // This is a feature of `babel-loader` for webpack (not Babel itself).
        // It enables caching results in ./node_modules/.cache/babel-loader/
        // directory for faster rebuilds.
        cacheDirectory: true,
        // See #6846 for context on why cacheCompression is disabled
        cacheCompression: false,
        compact: false
      }
    });

    // Return the altered config
    return config;
  },
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-knobs",
    "@storybook/addon-actions",
    "@storybook/addon-links"
  ]
};
