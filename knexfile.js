
// Update with your config settings.
require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'new-years-resolutions'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
