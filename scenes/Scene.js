import { db } from '../db'
import { getRandomIntBetween } from '../lib'

export default class Scene {
  constructor (data) {
    this.data = data || {}
  }

  save () {
    return new Promise((resolve, reject) => {
      console.log(this.data)
      if (this.data._id) {
        console.log('Saving scene with id', this.data._id)
        db.scenes.update({ _id: this.data._id }, this, err => {
          if (err) return reject(err)
          resolve(this)
        })
      } else {
        console.log('Saving new scene')
        db.scenes.insert(Object.assign({ canonicalName: this.canonicalName }, this.defaults, this.data), (err, sceneDoc) => {
          if (err) return reject(err)
          console.log('saved', this)
          console.log(sceneDoc)
          resolve(new Scene(sceneDoc))
        })
      }
    })
  }

  get canonicalName () {
    return this.constructor.name
  }

  get defaults () {
    return {}
  }

  get descriptions () {
    return this.defaults.descriptions
  }

  get possibleThings () {
    return this.defaults.possibleThings
  }

  describeScene () {
    return this.descriptions[getRandomIntBetween(0, this.descriptions.length)]
  }

  describeThings () {
    console.log('describing',this, this.data)
    let typesOfThings = this.data.things.reduce((types, thing) => {
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
}