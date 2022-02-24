const { getDefaultConfig } = require("metro-config");
const exclusionList = require('metro-config/src/defaults/exclusionList');

module.exports = (async () => {
  const {
    resolver: { sourceExts }
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("./postcss-transformer.js")
    },
    resolver: {
      sourceExts: [...sourceExts, "css", "pcss"],
      blacklistRE: exclusionList([/server\/.*/])
    }
  };
})();