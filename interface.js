import { colours as colourConfig } from './config'
import chalk from 'chalk'
import figlet from 'figlet'
import inquirer from 'inquirer'
import verbs from './verbs'

export const printExposition = string => {
  console.log(chalk.hex(colourConfig.exposition)(string))
}

export const printSystemMessage = string => {
  console.log(chalk.hex(colourConfig.system)(string))
}

export const printTitle = string => {
  console.log(chalk.hex(colourConfig.title)(figlet.textSync(string, { horizontalLayout: 'full' })))
}

const actionQuestions = [{
  name: 'action',
  type: 'input',
  message: 'What do you do?',
  validate: value => value.length ? true : 'That\'s nothing'
}]

export const promptForAction = () => {
  inquirer.prompt(actionQuestions)
  .then(responses => {
    let words = responses.action.split(' ')
    let verb = verbs[verbs.findVerb(words[0])]
    if (verb) verb(words[1])
    else printExposition(`'${words[0]}' is not a known verb`)

    promptForAction()
  })
}