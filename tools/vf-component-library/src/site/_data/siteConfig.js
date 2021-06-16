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
  vfVersion: "develop",
  vfVersionPrefix: "dev.",
  // use this when tagging a release
  // vfVersion: "v2.5.0-beta.2",
  // vfVersionPrefix: "",
  sections: {
    about: {
      url: "/about",
      title: "About the Visual Framework",
      summary: "A toolkit for better life science websites."
    },
    building: {
      url: "/building",
      title: "Building a site",
      summary: "How to make a project with Visual Framework components."
    },
    designtokens: {
      url: "/design-tokens",
      title: "Design tokens",
      summary: "The colour, typography, spacing, and other stylistic decisions as design tokens for consumption."
    },
    developing: {
      url: "/developing",
      title: "Developing",
      summary: "Contributing code and guidance to the Visual Framework."
    },
    patterns: {
      url: "/patterns",
      title: "Patterns",
      summary: "Pattern-level example boilerplates."
    },
    components: {
      url: "/components",
      title: "Components and patterns",
      summary: "Building block components and pattern-level example boilerplates."
    },
    designkit: {
      url: "/design-kit",
      title: "Design kit",
      summary: "Design and collaborate on ideas without code."
    }
  }
};
