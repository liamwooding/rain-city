import { verbs as verbsConfig } from './config'

export default {
  look: target => {
    console.log(target, typeof target)
  },

  findVerb: name => {
    let verb = verbsConfig.find(verb => {
      return verb.alternateNames.some(alt => alt === name) || name === verb.canonicalName
    })
    if (!verb) return null
    return verb.canonicalName
  }
}