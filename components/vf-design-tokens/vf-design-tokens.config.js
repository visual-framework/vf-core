

// As the design tokens need special logic the fractal config is a `.js` file, that
// is not combinable with a `.yml` config file
// https://fractal.build/guide/core-concepts/configuration-files.html#configuration-file-formats
let fractalConfig = {
  title: "Design Tokens",
  status: "live",
  hidden: "true",
};

// export the config to fractal
module.exports = fractalConfig;
