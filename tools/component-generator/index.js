var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

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
      chalk.white("https://git.VF.de/grp-stratcom/visual-framework-tooling-prototype/blob/setup/initial-installs/README.md#creating-a-new-component")
    ));

    var componentType = ['element', 'block', 'container', 'grid', 'boilerplate'];
    var DepartmentType = ['VF Global', 'EMBL', 'EMBL-EBI'];

    var prompts = [{
      type: 'list',
      name: 'dept',
      required: true,
      message: 'Who\'s the component for?',
      choices: DepartmentType
    }, {
      type: 'list',
      name: 'type',
      required: true,
      message: 'What type of component is this?',
      choices: componentType
    }, {
      type: 'input',
      name: 'componentName',
      required: true,
      message: 'What\'s the name of your component? (all lowercase, a hyphen instead of space, will be prefixed with `vf-`)',
      description: 'Component name'
    }, {
      type: 'confirm',
      name: 'npm',
      message: 'Is it a npm package?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  }

  writing() {

    switch (this.props.dept) {
      case "VF Global":
      var path = "./components" + "/";
      var namespace = "vf-";
      break;
      case "EMBL":
      var path = "./components/EMBL" + "/";
      var namespace = "embl-";
      break;
      case "EMBL-EBI":
      var path = "./components/EMBL-EBI" + "/";
      var namespace = "ebi-";
      break;
    }
    var patternType = this.props.type;
    var totalPath = path + namespace + this.props.componentName + "/";
    var fileName = namespace + this.props.componentName;


    var outputFile = fileName + '.hbs';

    this.fs.copyTpl(
      this.templatePath('_component.hbs'),
      this.destinationPath(totalPath + outputFile),
      {
        componentName: fileName
      }
    );


    var outputFile =  fileName + '.scss';

    this.fs.copyTpl(
      this.templatePath('_component.scss'),
      this.destinationPath(totalPath + outputFile),
      {
        componentName: fileName
      }
    );

    var outputFile =  fileName + '.variables.scss';

    this.fs.copyTpl(
      this.templatePath('_component.variables.scss'),
      this.destinationPath(totalPath + outputFile),
      {
        componentName: fileName
      }
    );

    var outputFile =  fileName + '.js';

    this.fs.copyTpl(
      this.templatePath('_component.js'),
      this.destinationPath(totalPath + outputFile),
      {
        componentName: fileName
      }
    );

    var outputFile = fileName + '.config.yml';

    this.fs.copyTpl(
      this.templatePath('_component.config.yml'),
      this.destinationPath(totalPath + outputFile),
      {
        componentType: patternType,
        componentName: fileName
      }
    );

    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath(totalPath + 'README.md'),
      {
        componentName: fileName
      }
    );

    this.fs.copyTpl(
      this.templatePath('_CHANGELOG.md'),
      this.destinationPath(totalPath + 'CHANGELOG.md'),
      {
        componentName: fileName
      }
    );

    if (this.props.npm) {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath(totalPath + 'package.json'),
        {
          componentName: fileName,
          componentStylesheet: fileName + '.scss'
        }
      );
    }

    if (this.props.npm) {
      this.fs.copyTpl(
        this.templatePath('_index.scss'),
        this.destinationPath(totalPath + 'index.scss'),
        {
          componentName: fileName
        }
      );
    }
  }
};
