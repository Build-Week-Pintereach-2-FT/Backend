// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/pintereach.db3'
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
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
    client: 'pg',
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

};
