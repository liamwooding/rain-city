import { scenes as scenesConfig } from './config'
import { populateThingsFromSceneConfig } from './lib'

export default class Scene {
  constructor (opts) {
    opts = opts || {}
    Object.assign(this, Object.keys(opts).reduce((obj, key) => {
      obj[`_${key}`] = opts[key]
      return obj
    }, {}))

    this._sceneConfig = scenesConfig[opts.sceneId || 'blank']
  }

  generate () {
    this._things = populateThingsFromSceneConfig(this._sceneConfig.things)
  }

  getDescription () {
    let descriptionConfig = this._sceneConfig.description

    if (descriptionConfig.sentences && descriptionConfig.sentences.length) {
      return descriptionConfig.sentences
        .sort((a, b) => {
          return Math.random() * a.chanceToBeFirst - Math.random() * b.chanceToBeFirst
        })
        .map(s => s.text)
        .join(' ')
    }
  }
}