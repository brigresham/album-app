//build a connection to the database
const mysql = require('mysql2')

//create a pool next  this enables multiple connections \
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'myalbumdb'
})

module.exports = pool