require('dotenv').config()

module.exports = {

  development: {
    client: process.env.DB_CLIENT,
    version: process.env.DB_VERSION,
    connection: {
      host : process.env.DB_SERVER,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE,
      ssl: true
    },
    migrations: {
      directory: './src/database/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './src/database/seeds',
    }
  }
};