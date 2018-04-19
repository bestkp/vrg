const chalk = require('chalk')
module.exports = {
  log: function(msg = '') {
    console.log(msg)
  },
  green: function(msg = '') {
    console.log(chalk.green(msg))
  },
  red: function(msg = '') {
    console.log(chalk.red(msg))
  },
  gray: function(msg = '') {
    console.log(chalk.gray(msg))
  }
}