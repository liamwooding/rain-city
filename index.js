import chalk from 'chalk'
import clear from 'clear'
import CLI from 'clui'
import figlet from 'figlet'
import inquirer from 'inquirer'
import Preferences from 'preferences'
import fs from 'fs'

clear()
console.log(chalk.yellow(figlet.textSync('Rain City', { horizontalLayout: 'full' })))

let questions = [{
  name: 'action',
  type: 'input',
  message: 'What do you do?',
  validate: value => value.length ? true : 'That\s nothing'
}]

inquirer.prompt(questions).then(responses => console.log(chalk.yellow(figlet.textSync(responses.action, { horizontalLayout: 'full' }))))