import clear from 'clear'
import CLI from 'clui'
import Preferences from 'preferences'
import fs from 'fs'
import Scene from './Scene'
import { player } from './Player'
import { db } from './db'
import { printExposition, printSystemMessage, printTitle, promptForAction } from './interface'

clear()
console.log(db)
printTitle('Rain City')

player.scene = new Scene('training1')

promptForAction()