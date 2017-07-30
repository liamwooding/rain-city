import { things as thingsConfig } from './config'

export const getRandomIntBetween = (min, max, inclusive) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  if (inclusive) max++
  return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
}