import { things as thingsConfig } from './config'

export const getRandomIntBetween = (min, max, inclusive) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  if (inclusive) max++
  return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
}

export const lookupThingIdByName = name => {
  let lowercaseName = name.toLowerCase()
  return Object.keys(thingsConfig).find(key => {
    return thingsConfig[key].names.some(thingName => thingName === lowercaseName)
  })
}