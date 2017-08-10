import { db } from './db'
import async from 'async'
import { getRandomIntBetween } from './lib'
import { default as things } from './things'

export class ThingController {
  createThings (thingOpts, creationOpts = {}, sceneId) {
    return new Promise((resolve, reject) => {
      let thingClass = things[thingOpts.canonicalName].default
      if (!thingClass) return reject(`No thing found with canonicalName ${thingOpts.canonicalName}`)
      
      let minAmount = creationOpts.minAmount || 1
      let maxAmount = creationOpts.maxAmount || 1
      let count = getRandomIntBetween(minAmount, maxAmount, true)
      let newThings = []
      while (count--) newThings.push(new thingClass(Object.assign({}, thingOpts, { sceneId })))

      async.concat(newThings, (newThing, cb) => {
        newThing.save().then(thing => cb(null, thing)).catch(cb)
      }, (err, things) => {
        if (err) return reject(err)
        resolve(things)
      })
    })
  }
}

export let thingController = new ThingController()