var Generator = require("yeoman-generator");
var chalk = require("chalk");
var yosay = require("yosay");
var path = require("path");
var config = require(path.resolve(".","package.json"));

config.vfConfig = config.vfConfig || [];
vfName = config.vfConfig.vfName || "Visual Framework";
vfNamespace = config.vfConfig.vfNamespace || "vf-";
vfComponentPath = config.vfConfig.vfComponentPath || path.resolve(__dirname, "../../components");

function camelize(str,upperCaseFirst) {
  var upperCaseFirst = upperCaseFirst || false;
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    if (upperCaseFirst) {
      return word.toUpperCase();
    } else {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }
  }).replace(/\s+/g, "").replace(/-/g, "");
}

module.exports = class extends Generator {
  prompting() {
    this.log((
      chalk.blue.bold("_______  _______  __   __  _______  _______  __    _  _______  __    _  _______   \n") +
      chalk.blue.bold("|       ||       ||  |_|  ||       ||       ||  |  | ||       ||  |  | ||       |  \n") +
      chalk.blue.bold("|       ||   _   ||       ||    _  ||   _   ||   |_| ||    ___||   |_| ||_     _|  \n") +
      chalk.blue.bold("|       ||  | |  ||       ||   |_| ||  | |  ||       ||   |___ |       |  |   |    \n") +
      chalk.blue.bold("|      _||  |_|  ||       ||    ___||  |_|  ||  _    ||    ___||  _    |  |   |    \n") +
      chalk.blue.bold("|     |_ |       || ||_|| ||   |    |       || | |   ||   |___ | | |   |  |   |    \n") +
      chalk.blue.bold("|_______||_______||_|   |_||___|    |_______||_|  |__||_______||_|  |__|  |___|    \n") +
      chalk.red.bold("_______  _______  __    _  _______  ______    _______  _______  _______  ______   \n") +
      chalk.red.bold("|       ||       ||  |  | ||       ||    _ |  |   _   ||       ||       ||    _ |  \n") +
      chalk.red.bold("|    ___||    ___||   |_| ||    ___||   | ||  |  |_|  ||_     _||   _   ||   | ||  \n") +
      chalk.red.bold("|   | __ |   |___ |       ||   |___ |   |_||_ |       |  |   |  |  | |  ||   |_||_ \n") +
      chalk.red.bold("|   ||  ||    ___||  _    ||    ___||    __  ||       |  |   |  |  |_|  ||    __  |\n") +
      chalk.red.bold("|   |_| ||   |___ | | |   ||   |___ |   |  | ||   _   |  |   |  |       ||   |  | |\n") +
      chalk.red.bold("|_______||_______||_|  |__||_______||___|  |_||__| |__|  |___|  |_______||___|  |_|\n")
    ));

    this.log((
      chalk.white("This tool helps you develop new components for the Visual Framework \n") +
      chalk.white("Not sure which options to pick? See the guide at: \n") +
      chalk.white("https://stable.visual-framework.dev/developing/#components")
    ));

    var componentType = ["element", "block", "container", "layout", "utility"];
    if (vfNamespace != "vf-") {
      var DepartmentType = [vfName, "VF Global"];
    } else {
      var DepartmentType = [vfName];
    }

    var prompts = [{
      type: "list",
      name: "dept",
      required: true,
      message: "Who's the component for?",
      choices: DepartmentType
    }, {
      type: "list",
      name: "type",
      required: true,
      message: "What type of component is this?",
      choices: componentType
    }, {
      type: "input",
      name: "componentName",
      required: true,
      message: "What's the name of your component? (all lowercase, a hyphen instead of space, will be prefixed with your project's namespace.)",
      description: "Component name"
    }, {
      type: "confirm",
      name: "npm",
      message: "Will this be published to npm?",
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  }

  writing() {

    switch (this.props.dept) {
    case vfName:
      var namespace = vfNamespace;
      break;
    case "VF Global":
      var namespace = "vf-";
      break;
    }
    var patternType = this.props.type;
    var totalPath = vfComponentPath + "/" + namespace + this.props.componentName + "/";
    var fileName = namespace + this.props.componentName;

    var outputFile = fileName + ".njk";
    this.fs.copyTpl(
      this.templatePath("_component.njk"),
      this.destinationPath(totalPath + outputFile),
      {
        componentName: fileName
      }
    );

    var outputFile = fileName + ".scss";
    this.fs.copyTpl(
      this.templatePath("_component.scss"),
      this.destinationPath(totalPath + outputFile),
      {
        isNpmComponent: this.props.npm,
        componentName: fileName
      }
    );

    var outputFile = fileName + ".variables.scss";
    this.fs.copyTpl(
      this.templatePath("_component.variables.scss"),
      this.destinationPath(totalPath + outputFile),
      {
        componentName: fileName
      }
    );

    var outputFile = fileName + ".js";
    this.fs.copyTpl(
      this.templatePath("_component.js"),
      this.destinationPath(totalPath + outputFile),
      {
        componentNameJs: camelize(fileName), // JS friendly name
        componentName: fileName
      }
    );

    var outputFile = fileName + ".react.js";
    this.fs.copyTpl(
      this.templatePath("_component.react.js"),
      this.destinationPath(totalPath + outputFile),
      {
        componentNameReact: camelize(fileName, true), // React JS friendly name
        componentName: fileName
      }
    );

    var outputFile = fileName + ".config.yml";
    this.fs.copyTpl(
      this.templatePath("_component.config.yml"),
      this.destinationPath(totalPath + outputFile),
      {
        componentType: patternType,
        componentName: fileName
      }
    );

    this.fs.copyTpl(
      this.templatePath("_README.md"),
      this.destinationPath(totalPath + "README.md"),
      {
        componentName: fileName
      }
    );

    this.fs.copyTpl(
      this.templatePath("_.npmignore"),
      this.destinationPath(totalPath + ".npmignore"),
      {
        componentName: fileName
      }
    );

    this.fs.copyTpl(
      this.templatePath("_CHANGELOG.md"),
      this.destinationPath(totalPath + "CHANGELOG.md"),
      {
        componentName: fileName
      }
    );

    if (this.props.npm) {
      this.fs.copyTpl(
        this.templatePath("_package.json"),
        this.destinationPath(totalPath + "package.json"),
        {
          componentName: fileName,
          componentHomepage: config.vfConfig.vfHomepage,
          componentStylesheet: fileName + ".scss"
        }
      );
    }

    if (this.props.npm) {
      this.fs.copyTpl(
        this.templatePath("_index.scss"),
        this.destinationPath(totalPath + "index.scss"),
        {
          componentName: fileName
        }
      );
    }
  }
};
