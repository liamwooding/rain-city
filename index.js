import clear from 'clear'
import CLI from 'clui'
import Preferences from 'preferences'
import fs from 'fs'
import { player } from './Player'
import { sceneController } from './SceneController'
import { db } from './db'
import { printExposition, printSystemMessage, printTitle, promptForAction } from './interface'

clear()
printTitle('Rain City')

sceneController.createScene('Training1').then(scene => {
  player.scene = scene
  promptForAction()
})