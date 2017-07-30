import chalk from 'chalk'
import clear from 'clear'
import CLI from 'clui'
import figlet from 'figlet'
import inquirer from 'inquirer'
import Preferences from 'preferences'
import fs from 'fs'
import { colours as colourConfig } from './config'
import Scene from './Scene'
import verbs from './verbs'

clear()
// console.log(chalk.hex(colourConfig.title)(figlet.textSync('Rain City', { horizontalLayout: 'full' })))

let questions = [{
  name: 'action',
  type: 'input',
  message: 'What do you do?',
  validate: value => value.length ? true : 'That\'s nothing'
}]

let trainingScene = new Scene('training1')

printSystemMessage('Loading training1\n')
printExposition(trainingScene.describeScene())

promptForAction()

function promptForAction () {
  inquirer.prompt(questions).then(responses => {
    let words = responses.action.split(' ')
    let verb = verbs[verbs.findVerb(words[0])]
    if (verb) verb(words[1])
    else printExposition(`'${words[0]}' is not a known verb`)

    // console.log(chalk.yellow(figlet.textSync(responses.action, { horizontalLayout: 'full' })))
    promptForAction()
  })
}

function printExposition (string) {
  console.log(chalk.hex(colourConfig.exposition)(string))
}

function printSystemMessage (string) {
  console.log(chalk.hex(colourConfig.system)(string))
}

function printTitle (string) {
  console.log(chalk.hex(colourConfig.title)(figlet.textSync(string, { horizontalLayout: 'full' })))
}