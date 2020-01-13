module.exports = {
  stories: ["../src/**/*.stories.js", "../src/**/*.stories.jsx"],
  webpack: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    // config.plugins.push(...);
    // config.module.rules.push(...);

    // This rule is so we don't have to define the JSX pragma in every file we need to use emotion css
    // https://emotion.sh/docs/css-prop
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [
          require.resolve("@babel/preset-react"),
          require.resolve("@babel/preset-env"),
          // Emotion preset must run BEFORE reacts preset to properly convert css-prop.
          // Babel preset-ordering runs reversed (from last to first). Emotion has to be after React preset.
          require.resolve("@emotion/babel-preset-css-prop")
        ]
        // other plugins here...
      }
    });

    // Return the altered config
    return config;
  },
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links"
  ]
};
