import Scene from './Scene'

export default class Training1 extends Scene {
  get defaults () {
    return {
      descriptions: ['The training area at CyberCops HQ'],
      possibleThings: [
        {
          thingOpts: {
            canonicalName: 'EmptyCasing'
          },
          creationOpts: {
            minAmount: 10,
            maxAmount: 50
          },
          sceneOpts : {
            chanceToAppear: 1,
            position: 'floor'
          }
        },
        {
          thingOpts: {
            canonicalName: 'CubeCrate'
          },
          creationOpts: {
            minAmount: 3,
            maxAmount: 5
          },
          sceneOpts : {
            chanceToAppear: 1,
            position: 'floor'
          }
        }
      ]
    }
  }
}