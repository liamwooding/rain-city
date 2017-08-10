import { db } from '../db'

export default class Thing {
  constructor (opts) {
    this._opts = opts || {}
  }

  save () {
    return new Promise((resolve, reject) => {
      db.things.insert(Object.assign({ canonicalName: this.canonicalName }, this.defaults, this._opts), (err, thing) => {
        if (err) return reject(err)
        resolve(thing)
      })
    })
  }

  get canonicalName () {
    return this.constructor.name
  }

  get defaults () {
    return {}
  }
}