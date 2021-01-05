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
    database: 'flower'
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
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))