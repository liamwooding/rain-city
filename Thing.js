import { things as thingsConfig } from './config'
import { getRandomIntBetween } from './lib'

export default class Thing {
  constructor (id, opts) {
    this._id = id
    this.rollAndSetAttributes()
  }

  rollAndSetAttributes () {
    this._height = this.rollAttribute('height')
    this._width = this.rollAttribute('width')
    this._length = this.rollAttribute('length')
    this._weight = this.rollAttribute('weight')
  }

  rollAttribute (attributeName) {
    if (this._config[attributeName]) return this._config[attributeName]

    let minAttribute = this._config[`min${attributeName.charAt(0).toUpperCase()}`]
    let maxAttribute = this._config[`max${attributeName.charAt(0).toUpperCase()}`]
    if (typeof minAttribute !== 'undefined' && typeof maxAttribute !== 'undefined') {
      if (minAttribute > maxAttribute) console.warn(`Bad attribute ${attributeName} config for thing ${this._id}: min is ${minAttribute}, max is ${maxAttribute}`)
      return Math.random() * (maxAttribute - minAttribute) + minAttribute
    }
    console.warn(`Bad attribute ${attributeName} config for thing ${this._id}: min is ${minAttribute}, max is ${maxAttribute}`)
    if (typeof minAttribute !== 'undefined') return minAttribute
    if (typeof maxAttribute !== 'undefined') return maxAttribute
  }

  get name () {
    return this._config.names[getRandomIntBetween(0, this._config.names.length)]
  }

  get nameWithAdjective () {
    let adjectives = this._config.adjectives
    if (!adjectives || !adjectives.length) return this.name
    let adjective = adjectives[getRandomIntBetween(0, adjectives.length)]
    return `${adjective} ${this.name}`
  }

  get id () {
    return this._id
  }

  getDescription (id) {
    this._config.descriptions[getRandomIntBetween(0, this._config.descriptions.length)]
  }

  get _config () {
    return thingsConfig[this._id || 'blank']
  }
}