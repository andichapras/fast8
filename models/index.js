const dbConfig = require('../db.config')
const sequelize = require('sequelize')

const sequelizing = new sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  })

  const db = {}
  db.sequelize = sequelize
  db.sequelizing = sequelizing

  db.companies = require('./company-model')(sequelizing,sequelize)
  db.employees = require('./employee-model')(sequelizing,sequelize)

  db.companies.belongsTo(db.companies, {foreignKey: 'company_id'})

  module.exports = db