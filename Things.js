import { db } from './db'

export const createThing = (type, opts) => new Promise((resolve, reject) => {
  let defaults = getConfigByName(type)
  if (!defaults) return reject(`No thing config found for type ${type}`)
  db.things.insert(Object.assign({}, defaults, opts), (err, thing) => err ? reject(err) : resolve(thing))
})

// export const createThings = (type, opts) => new Promise((resolve, reject) => {
//   let defaults = getConfigByName(type)
//   if (!defaults) return reject(`No thing config found for type ${type}`)
//   db.things.insert(Object.assign({}, defaults, opts), (err, thing) => err ? reject(err) : resolve(thing))
// })

export const getRandomName = (_id) => new Promise((resolve, reject) => {
  if (err) return reject(err)
  db.things.findOne({ _id }, (err, thing) => {
    return thing.names[getRandomIntBetween(0, thing.names.length)]
  })
})

export const getRandomNameWithAdjective = (_id) => new Promise((resolve, reject) => {
  db.things.findOne({ _id }, (err, thing) => {
    if (err) return reject(err)
    let adjective = thing.adjectives ? thing.adjectives[getRandomIntBetween(0, thing.adjectives.length)] : null
    let noun = thing.names[getRandomIntBetween(0, thing.names.length)]
    resolve(`${adjective ? adjective + ' ' : ''}${noun}`)
  })
})

getRandomNameWithAdjective () {
  let adjectives = this._config.adjectives
  if (!adjectives || !adjectives.length) return this.name
  let adjective = adjectives[getRandomIntBetween(0, adjectives.length)]
  return `${adjective} ${this.name}`
}

export const getConfigByName = name => {
  return thingsConfig.find(config => config.names.some(thingName => thingName.toLowerCase() === name.toLowerCase()))
}