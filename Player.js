import { printSystemMessage } from './interface'

export class Player {
  set scene (scene) {
    printSystemMessage('Loading training1\n')
    this._scene = scene
  }

  get scene () {
    return this._scene
  }
}

export let player = new Player()