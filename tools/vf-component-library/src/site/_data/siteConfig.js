const { DateTime } = require('luxon');

// Some various reusable configuration
module.exports = {
  siteInformation: {
    title: "The Visual Framework 2.0",
    short_description: 'A front-end toolkit to quickly build better life science websites.',
    url: "https://stable.visual-framework.dev/",
    author: "Visual Framework system",
    email: "ken.hawkins@embl.de",
  },
  buildTime: DateTime.fromISO(new Date().toISOString()),
  // vfVersion: global.vfVersion,
  vfVersion: 'v2.3.3-rc.3',
  sections: {
    about: {
      url: '/about',
      title: 'About'
    },
    guidelines: {
      url: '/guidelines',
      title: 'Guidelines'
    },
    patterns: {
      url: '/patterns',
      title: 'Patterns'
    },
    styles: {
      url: '/styles',
      title: 'Styles'
    },
    components: {
      url: '/components',
      title: 'Components'
    }
  }
};
