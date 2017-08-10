import Thing from './Thing'

export default class CubeCrate extends Thing {
  get defaults () {
    return {
      names: ['crate'],
      adjectives: ['wooden'],
      length: '1',
      width: '1',
      height: '1',
      weight: 100000,
      descriptions: ['An empty crate, used for hiding behind or jumping over']
    }
  }
}