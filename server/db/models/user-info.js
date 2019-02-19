const Sequelize = require('sequelize')
const db = require('../db')

const UserInfo = db.define('user-info', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  role: {
    type: Sequelize.ENUM('Head Coach', 'Assistant Coach'),
    allowNull: false
  },
  school: {
    type: Sequelize.STRING,
    allowNull: false
  },
  locked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
})

module.exports = UserInfo

/**
 * instanceMethods
 */

/**
 * classMethods
 */

/**
 * hooks
 */
