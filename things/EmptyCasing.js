import Thing from './Thing'

export default class EmptyCasing extends Thing {
  get defaults () {
    return {
      names: ['shell', 'casing', 'cartridge'],
      adjectives: ['empty', 'spent'],
      length: '0.03',
      width: '0.05',
      height: '0.05',
      weight: 5,
      descriptions: ['An empty shell from a cool cyberpunk revolver']
    }
  }
}