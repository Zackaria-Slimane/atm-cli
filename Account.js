const fs = require('fs')

module.exports = class Account {
  constructor(name) {
    this.#name = name
  }

  #name
  #balance

  get name() {
    return this.#name
  }
  get balance() {
    return this.#balance
  }
  get filePath() {
    return `accounts/${this.#name}.txt`
  }

  #load() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.filePath, (error, data) => {
        if (error) return reject(error)
        this.#balance = parseFloat(data)
        resolve()
      })
    })
  }

  static find(accountName) {
    const account = new Account(accountName)
    await account.#load()
  }
}
