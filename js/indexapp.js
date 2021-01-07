const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000;
//创建数据库连接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'huali'
})

connection.connect()
    //使用静态资源配置  public表示存放静态资源的文件目录
app.use(express.static('public'))
    // express header头解决跨域
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
    res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
    next();
});

// 获取列表
app.get('/', (req, res) => {
    connection.query('SELECT * from shouye where type_id=1', function(err, rows, fields) {
        res.send(rows)
    })
})
app.get('/1', (req, res) => {
    connection.query('SELECT * from shouye where type_id=2', function(err, rows, fields) {
        res.send(rows)
    })
})
app.get('/2', (req, res) => {
    connection.query('SELECT * from shouye where type_id=3', function(err, rows, fields) {
        res.send(rows)
    })
})
app.get('/3', (req, res) => {
    connection.query('SELECT * from shouye where type_id=4', function(err, rows, fields) {
        res.send(rows)
    })
})
app.get('/4', (req, res) => {
    connection.query('SELECT * from shouye where type_id=5', function(err, rows, fields) {
        res.send(rows)
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))