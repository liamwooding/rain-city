/*
  Sizes are in metres
  Weights are in grams
  Probability is calculated by: if (Math.random() <= chanceToAppear)
*/
export const colours = {
  system: '#268bd2',
  exposition: '#b58900',
  title: '#cb4b16'
}

export const objects = {
  emptyCasing: {
    names: [ 'shell', 'casing', 'cartridge' ],
    adjectives: [ 'empty', 'spent' ],
    length: '0.03',
    width: '0.05',
    height: '0.05',
    weight: 5,
    chanceToAppear: 1,
    minAmount: 10,
    maxAmount: 200
  },
  crateCube: {
    names: [ 'crate' ],
    adjectives: [ 'wooden' ],
    length: '1',
    width: '1',
    height: '1',
    chanceToAppear: 1,
    minAmount: 3,
    maxAmount: 5
  }
}

export const scenes = {
  training1: {
    objects: [
      { id: 'emptyCasing' },
      { id: 'crateCube' }
    ],
    description: {
      sentences: [
        {
          text: `There's a bunch of crates here. Spent casings litter the floor.`,
          chanceToBeFirst: 1,
          chanceToAppear: 1
        }
      ]
    }
  }
}