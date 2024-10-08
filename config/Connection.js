const { Sequelize } = require('sequelize')
require('dotenv').config()

// const Connection = new Sequelize({
//     dialect: 'postgres',
//     host: process.env.HOST || 'localhost',
//     port:  process.env.PORT || '5432',
//     username:  process.env.USERNAME || 'postgres',
//     password: process.env.PASSWORD || '',
//     database: process.env.DATABASE || 'backend'
// })


const Connection = new Sequelize({
    dialect: 'postgres',
    host: 'dpg-cs27lae8ii6s739d50gg-a',
    port:  '5432',
    username: 'fs29_jy9n_user',
    password: 'zDWrQhQDUPYjNe57l5hgSbdPUYJl7GgS',
    database: 'fs29_jy9n'
})


module.exports = Connection;