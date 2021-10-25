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
  vfVersion: "v2.5.3",
  vfVersionPrefix: "",
  sections: {
    about: {
      url: "/about",
      title: "About the Visual Framework",
      summary: "A toolkit tailored for better life science websites."
    },
    building: {
      url: "/building",
      title: "Building a site",
      summary: "How to make a project with Visual Framework components."
    },
    developing: {
      url: "/developing",
      title: "Contributing",
      summary: "Developing and contributing code and guidance to the Visual Framework."
    },
    components: {
      url: "/components",
      title: "Components and patterns",
      summary: "Building block components and pattern-level example boilerplates."
    }
  }
};
