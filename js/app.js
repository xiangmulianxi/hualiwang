const express = require('express') // 在当前文件中引入express
const app = express()
const port = 3000;
// 引入mysql数据库
var mysql = require('mysql');
//创建数据库连接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'huali'
});
// 连接数据库
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
// api接口  get请求
// 注册用户
app.get('/login', (req, res) => {
        var user = req.query.tel
        var password = req.query.pwd
        console.log(user, password);
        connection.query(`insert into user (user,password) values("${user}","${password}")`, function(err, rows, fields) {
            res.send({
                status: 200,
                data: rows // rows对应的是数据库查询返回的数据
            })
        })
    })
    // 登陆
app.get('/landing', (req, res) => {
        var user = req.query.user
        var password = req.query.pwd
        console.log(user, password);
        connection.query(`select * from user where user="${user}"`, function(err, rows, fields) {
            console.log(rows[0].password)
            if (rows[0].password === password) {
                res.send({
                    status: 200,
                    data: rows // rows对应的是数据库查询返回的数据
                })
            } else {
                res.send({
                    status: 404,
                    data: err // rows对应的是数据库查询返回的数据
                })
            }

        })
    })
    // 获取列表
app.get('/design1', (req, res) => {
    connection.query(`select * from design where type_id=1`, function(err, rows, fields) {
        res.send({
            status: 200,
            data: rows // rows对应的是数据库查询返回的数据
        })
    })
})
app.get('/design2', (req, res) => {
    connection.query(`select * from design where type_id=2`, function(err, rows, fields) {
        res.send({
            status: 200,
            data: rows // rows对应的是数据库查询返回的数据
        })
    })
});
// index
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
});
// huang
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