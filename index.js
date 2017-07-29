import chalk from 'chalk'
import clear from 'clear'
import CLI from 'clui'
import figlet from 'figlet'
import inquirer from 'inquirer'
import Preferences from 'preferences'
import fs from 'fs'
import { colours as colourConfig } from './config'
import Scene from './Scene'

clear()
console.log(chalk.hex(colourConfig.title)(figlet.textSync('Rain City', { horizontalLayout: 'full' })))

let questions = [{
  name: 'action',
  type: 'input',
  message: 'What do you do?',
  validate: value => value.length ? true : 'That\'s nothing'
}]

// inquirer.prompt(questions).then(responses => console.log(chalk.yellow(figlet.textSync(responses.action, { horizontalLayout: 'full' }))))
let trainingScene = new Scene({ sceneId: 'training1' })

console.log(`
${chalk.hex(colourConfig.system)('Loading training1\n')}
${chalk.hex(colourConfig.exposition)(trainingScene.describeScene())}
${chalk.hex(colourConfig.exposition)(trainingScene.describeThings())}
`)