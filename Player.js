import { printSystemMessage } from './interface'
import { sceneController } from './SceneController'

export class Player {
  loadScene (_id) {
    return new Promise((resolve, reject) => {
      sceneController.getScene(_id)
        .then(scene => {
          this.scene = scene
          resolve(this)
        })
        .catch(reject)
    })
  }

  set scene (scene) {
    printSystemMessage('Loading training1\n')
    this._scene = scene
  }

  get scene () {
    return this._scene
  }
}

export let player = new Player()