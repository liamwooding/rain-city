import nedb from 'nedb'

export class Database {
  constructor () {
    this.things = new nedb({ filename: './data/things.db', autoload: true })
    this.scenes = new nedb({ filename: './data/things.db', autoload: true })
  }
}

export let db = new Database()