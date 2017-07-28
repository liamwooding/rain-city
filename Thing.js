import { things as thingsConfig } from './config'
import math from 'mathjs'

export default class Thing {
  constructor (id, opts) {
    this._id = id
    this._thingConfig = thingsConfig[id || 'blank']
  }

  rollAndSetAttributes () {
    this._height = rollAttribute('height')
    this._width = rollAttribute('width')
    this._length = rollAttribute('length')
    this._weight = rollAttribute('weight')
  }

  rollAttribute (attributeName) {
    if (this._thingConfig[attributeName]) return this._thingConfig[attributeName]

    let minAttribute = this._thingConfig[`min${attributeName.charAt(0).toUpperCase()}`]
    let maxAttribute = this._thingConfig[`max${attributeName.charAt(0).toUpperCase()}`]
    if (typeof minAttribute !== 'undefined' && typeof maxAttribute !== 'undefined') {
      if (minAttribute > maxAttribute) console.warn(`Bad attribute ${attributeName} config for thing ${this._id}: min is ${minAttribute}, max is ${maxAttribute}`)
      return Math.random() * (maxAttribute - minAttribute) + minAttribute
    }
    console.warn(`Bad attribute ${attributeName} config for thing ${this._id}: min is ${minAttribute}, max is ${maxAttribute}`)
    if (typeof minAttribute !== 'undefined') return minAttribute
    if (typeof maxAttribute !== 'undefined') return maxAttribute
  }

  getDescription () {
    let descriptionConfig = this._objectConfig.description

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