import config from './config'

export const generateObjectsFromIds = (ids) => {
  ids = ids.map(id => typeof id === 'string' ? { id } : id)

  return ids.reduce((objects, id) => {
    if (Math.random() <= (id.chanceToAppear || 0)) objects.push(config.objects[id])
  }, [])
}