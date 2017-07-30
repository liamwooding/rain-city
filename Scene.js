import {
  scenes as scenesConfig,
  things as thingsConfig
} from './config'
import pluralize from 'pluralize'
import Thing from './Thing'
import { getRandomIntBetween, lookupThingIdByName } from './lib'

export default class Scene {
  constructor (id, opts) {
    opts = opts || {}
    Object.assign(this, Object.keys(opts).reduce((obj, key) => {
      obj[`_${key}`] = opts[key]
      return obj
    }, {}))

    this._sceneConfig = scenesConfig[id]
    this.init()
  }

  init () {
    this.populateThingsInScene()
  }

  getThings () {
    return this._things
  }

  describeScene () {
    let sceneDescription = this._sceneConfig.descriptions[0]
    return sceneDescription
  }

  describeThings () {
    let typesOfThings = this._things.reduce((types, thing) => {
      types[thing.id] = types[thing.id] || {}
      types[thing.id].thing = thing
      if (typeof types[thing.id].count === 'undefined') types[thing.id].count = 0
      types[thing.id].count++
      return types
    }, {})

    return Object.keys(typesOfThings).map(key => {
      let type = typesOfThings[key]
      return `There ${pluralize('is', type.count)} ${pluralize(type.thing.nameWithAdjective, type.count, true)} here.`
    }).join(' ')
  }

  findThingInScene (name) {
    let id = lookupThingIdByName(name)
 
    let thingsWithThatName = this._things.filter(thing => thing.id = id)
    return thingsWithThatName[getRandomIntBetween(0, thingsWithThatName.length)]
  }
  
  populateThingsInScene () {
    this._things = this._sceneConfig.things.reduce((thingsInScene, thing) => {
      if (Math.random() <= (thing.chanceToAppear || 0)) {
        let minAmount = thing.minAmount || 0
        let maxAmount = thing.maxAmount || minAmount
        let amount = getRandomIntBetween(minAmount, maxAmount, true)
        while (amount) {
          thingsInScene.push(new Thing(thing.id))
          amount--
        }
      }
      return thingsInScene
    }, [])
  }
}