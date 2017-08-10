import nedb from 'nedb'

export class Database {
  constructor () {
    this.things = new nedb({ filename: `${__dirname}/data/things.db`, autoload: true })
    this.scenes = new nedb({ filename: `${__dirname}/data/scenes.db`, autoload: true })
  }
}

export let db = new Database()