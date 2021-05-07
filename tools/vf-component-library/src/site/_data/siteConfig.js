const { DateTime } = require("luxon");

// Some various reusable configuration
module.exports = {
  siteInformation: {
    title: "The Visual Framework 2.0",
    short_description: "A front-end toolkit to quickly and collaboratively build better life science websites.",
    url: "https://stable.visual-framework.dev/",
    author: "Visual Framework system",
    email: "ken.hawkins@embl.de",
  },
  buildTime: DateTime.fromISO(new Date().toISOString()),
  // vfVersion: global.vfVersion,
  // use this when NOT tagging a release
  // vfVersion: "develop",
  // vfVersionPrefix: "dev.",
  // use this when tagging a release
  vfVersion: "v2.4.14",
  vfVersionPrefix: "",
  sections: {
    about: {
      url: "/about",
      title: "About",
      summary: "A toolkit for better life science websites."
    },
    building: {
      url: "/building",
      title: "Building",
      summary: "How to make a project with Visual Framework components."
    },
    designtokens: {
      url: "/design-tokens",
      title: "Design tokens"
    },
    developing: {
      url: "/developing",
      title: "Developing",
      summary: "Contributing code and guidance to the Visual Framework."
    },
    patterns: {
      url: "/patterns",
      title: "Patterns"
    },
    designkit: {
      url: "/design-kit",
      title: "Design kit",
      summary: "Design and collaborate on ideas without code."
    }
  }
};
