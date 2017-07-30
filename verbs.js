import { verbs as verbsConfig } from './config'
import { printExposition } from './interface'
import { player } from './Player'

const verbs = {
  look: () => {
    if (!player.scene) printExposition('You are nowhere')
    printExposition(player.scene.describeScene())
    printExposition(player.scene.describeThings())
  },

  inspect: target => {

  },

  findVerb: name => {
    let verb = verbsConfig.find(verb => {
      return verb.alternateNames.some(alt => alt === name) || name === verb.canonicalName
    })
    if (!verb) return null
    return verb.canonicalName
  }
}

export default verbs