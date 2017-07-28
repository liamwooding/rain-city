import config from './config'

export const populateThingsFromSceneConfig = (thingsConfig) => {
  return thingsConfig.reduce((things, objectConfig) => {
    if (Math.random() <= (objectConfig.chanceToAppear || 0)) things.push(config.things[objectConfig])
  }, [])
}