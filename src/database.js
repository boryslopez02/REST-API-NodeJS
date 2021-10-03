const mysql = require('mysql')
const mysqlConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejsrest'
})

mysqlConn.connect(function (err, conn) {
    if (err) {
        console.log(err)
        return
    } else {
        console.log("the DB is conected")
    }
})

module.exports = mysqlConn