const express = require('express')
var mysql = require('mysql')
const app = express()
const port = 3000
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'flower'
})
connection.connect()

app.get('/ji', (req, res) => {
    connection.query('SELECT * from nav', function(err, rows, fields) {
        if (err) throw err

        res.send(rows)
    })
})
app.get('/hua', (req, res) => {
    connection.query('SELECT * from  list limit 0,28', function(err, rows, fields) {
        if (err) throw err

        res.send(rows)
    })
})
app.get('/yong', (req, res) => {
    connection.query('SELECT * from immortal', function(err, rows, fields) {
        if (err) throw err

        res.send(rows)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))