const withCss = require("@zeit/next-css")
const path = require("path");


module.exports = withCss({
  // eslint-disable-next-line no-unused-vars
  webpack(config, options) {
    config.node = {
      fs: "empty",
    }
    config.devServer = {
      host: "0.0.0.0",
      port: 3000,
      disableHostCheck: true,
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname, "./src")
    };
    return config
  },
})
