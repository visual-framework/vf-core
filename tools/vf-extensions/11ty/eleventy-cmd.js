#!/usr/bin/env node

// Forked from eleventy v0.9.0

// This is a subtle fork for the main Eleventy cmd.js to behave as a module, returning `elev` so it can be npm-required
// It allows things like the below in gulp or paren node js; for more see https://github.com/khawkins98/gulp-eleventy-example
//
//   let elevExtensions = require.resolve('@visual-framework/vf-extensions/');
//   let elev = require(path.resolve(elevExtensions,'../11ty/eleventy-cmd.js'));
//   elev.write().then( function() {
//     console.log('Done building 11ty');
//     yourCallBack();
//   });

const chalk = require("chalk"); // node 8+
const debug = require("debug")("Eleventy:cmd");

if (process.env.DEBUG) {
  require("time-require");
}
const EleventyErrorHandler = require("@11ty/eleventy/src/EleventyErrorHandler");

const EleventyCommandCheckError = require("@11ty/eleventy/src/EleventyCommandCheckError");
const argv = require("minimist")(process.argv.slice(2), {
  string: ["input", "output", "formats", "config", "pathprefix", "port"],
  boolean: [
    "build", // vf specific
    "dev", // vf specific
    "quiet",
    "version",
    "watch",
    "dryrun",
    "help",
    "serve",
    "passthroughall",
    "incremental",
  ],
  default: {
    quiet: null,
  },
  unknown: function (unknownArgument) {
    if (unknownArgument != 'build' && unknownArgument != 'dev')
      throw new EleventyCommandCheckError(
        `We don’t know what '${unknownArgument}' is. Use --help to see the list of supported commands.`
      );
  },
});
debug("command: eleventy ", argv.toString());
const Eleventy = require("@11ty/eleventy/src/Eleventy");

process.on("unhandledRejection", (error, promise) => {
  EleventyErrorHandler.error(
    error,
    `Unhandled rejection in promise (${promise})`
  );
});
process.on("uncaughtException", (error) => {
  EleventyErrorHandler.fatal(error, "Uncaught exception");
});
process.on("rejectionHandled", (promise) => {
  EleventyErrorHandler.warn(
    promise,
    "A promise rejection was handled asynchronously"
  );
});

let elev = new Eleventy(argv.input, argv.output, {
  // --quiet and --quiet=true both resolve to true
  quietMode: argv.quiet,
});

elev.setConfigPathOverride(argv.config);
elev.setPathPrefix(argv.pathprefix);
elev.setDryRun(argv.dryrun);
elev.setIncrementalBuild(argv.incremental);
elev.setPassthroughAll(argv.passthroughall);
elev.setFormats(argv.formats);

elev
  .init()
  .then( function() {
    if (argv.version) {
      console.log(elev.getVersion());
    } else if (argv.help) {
      console.log(elev.getHelp());
    } else if (argv.serve) {
      elev.watch();
      // Serve is instead run by the parent JS
    } else if (argv.watch) {
      elev.watch();
      // Watch is instead run by the parent JS
    } else {
      // No default
    }
  })
  .catch(EleventyErrorHandler.fatal);

module.exports = elev;
