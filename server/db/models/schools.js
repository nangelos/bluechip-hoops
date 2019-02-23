const Sequelize = require('sequelize')
const db = require('../db')

const Schools = db.define('schools', {
  college: {
    type: Sequelize.STRING
  },
  mascot: {
    type: Sequelize.STRING,
    defaultValue: ''
  }
})

module.exports = Schools
