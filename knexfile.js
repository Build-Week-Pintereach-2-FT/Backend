// Update with your config settings.
require('dotenv').config()


  module.exports = {
    development: {
      client: "sqlite3",
      useNullAsDefault: true,
      connection: {
        filename: "./data/pintereach2bw4"
      },
      migrations: {
        tableName: "knex_migrations"
      },
      migrations: {
        directory: "./migrations"
      },
      seeds: {
        directory: "./seeds"
      }
    
    },
  // staging: {
  //   client: 'pg',
  //   connection: {
  //     filename: "./data/staging.db3"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   seeds: {
  //     directory: "./migrations"
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,

    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  }
}