require('dotenv').config()

module.exports={

  development: {
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
    host: process.env.DBHOST,
    port: 3306,
    dialect: "mysql",
    ykey: process.env.YKEY
  },
  test: {
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
    host: process.env.DBHOST,
    port: 3306,
    dialect: "mysql",
    ykey: process.env.YKEY
  },
  production: {
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
    host: process.env.DBHOST,
    port: 3306,
    dialect: "mysql",
    ykey: process.env.YKEY
  }

}