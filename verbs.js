import { verbs as verbsConfig } from './config'
import { printExposition } from './interface'
import { sceneController } from './SceneController'
import { player } from './Player'

const verbs = {
  look: () => {
    if (!player.scene) return printExposition('You are nowhere')
    printExposition(player.scene.describeScene())
    printExposition(player.scene.describeThings())
  },

  inspect: target => {
    if (!target) return console.error('No target passed to inspect')
    if (!player.scene) throw new Error(`Attempted to inspect ${target} but player had no scene`)
    printExposition(player.scene.findThingInScene(target) && player.scene.findThingInScene(target).getDescription())
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