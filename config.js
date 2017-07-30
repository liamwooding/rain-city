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

export const thingsConfig = [
  {
    type: 'emptyCasing',
    names: [ 'shell', 'casing', 'cartridge' ],
    adjectives: [ 'empty', 'spent' ],
    length: '0.03',
    width: '0.05',
    height: '0.05',
    weight: 5,
    descriptions: ['An empty shell from a cool cyberpunk six shooter']
  },
  {
    type: 'crateCube',
    names: [ 'crate' ],
    adjectives: [ 'wooden' ],
    length: '1',
    width: '1',
    height: '1',
    weight: 100000,
    descriptions: ['An empty crate, often used for hiding behind or jumping over']
  }
]

export const scenesConfig = [
  {
    name: 'training1',
    descriptions: ['The training area at CyberCops HQ'],
    things: [
      {
        type: 'emptyCasing',
        chanceToAppear: 1,
        minAmount: 10,
        maxAmount: 50,
        position: 'floor'
      },
      {
        type: 'crateCube',
        chanceToAppear: 1,
        minAmount: 3,
        maxAmount: 5,
        position: 'floor'
      }
    ]
  }
]

export const verbs = [
  {
    canonicalName: 'look',
    alternateNames: []
  },
  {
    canonicalName: 'inspect',
    alternateNames: []
  }
]