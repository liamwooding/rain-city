import { db } from './db'
import async from 'async'
import { thingController } from './ThingController'
import { default as scenes } from './scenes'
const Scene = scenes.Scene.default

export class SceneController {
  getScene (_id) {
    return new Promise((resolve, reject) => {
      db.scenes.findOne({ _id }, (err, sceneDoc) => {
        if (err) return reject(err)
        resolve(new Scene(sceneDoc))
      })
    })
  }

  createScene (canonicalName, opts) {
    return new Promise((resolve, reject) => {
      let sceneClass = scenes[canonicalName].default
      if (!sceneClass) return reject(`No scene found with canonicalName ${canonicalName}`)
      
      let scene = new sceneClass(opts)
      scene.save()
        .then(scene => {
          console.log('bout to populate scene', scene)
          this.populateScene(scene._id).then(() => {
            resolve(scene)
          }).catch(reject)
        })
        .catch(reject)
    })
  }

  populateScene (_id) {
    return new Promise((resolve, reject) => {
      this.getScene(_id).then(scene => {
        async.concat(scene.possibleThings, (possibleThing, cb) => {
          thingController.createThings(possibleThing.thingOpts, possibleThing.creationOpts, _id)
            .then(things => cb(null, things))
            .catch(cb)
        }, (err, things) => {
          if (err) return reject(err)

          scene.data.things = things
          console.log('populayed',scene)
          scene.save().then(resolve).catch(reject)
        })
      })
      .catch(reject)
    })
  }

}

export let sceneController = new SceneController()