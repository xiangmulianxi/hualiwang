const express = require('express')
const app = express()
var mysql = require('mysql')
//创建数据库连接
var connection = mysql.createConnection({
    host: 'localhost',
    port:'3304',
    user: 'root',
    password: 'root',
    database: 'flowergift'
  })
  //链接数据库 
  connection.connect()

  //放在接口里
  // connection.query('select * from cake limit 0,10', function (err, rows, fields) {
  //   console.log(rows)
  // })

 

app.use(express.static('public'))


// express header头解决跨域
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method' )
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
    res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
    next();
});


const port = 3000
//请求数据的方式get  res.send发送后台请求回来的数据
app.get('/home', (req, res) => {
  var id = req.query.id;
  var page = req.query.page;
  connection.query(id == 0?`select * from gift limit ${(page - 1) * 28},28`:`select * from gift where type_id=${id} limit ${(page - 1) * 28},28`, function (err, rows, fields) {
    res.send({
      status:200,
      data:rows
    })
  })
}
)

//tab 切换
app.get('/tab', (req, res) => {
  var id = req.query.id;
  connection.query(`select * from giftlist`, function (err, rows, fields) {
    res.send({
      status:200,
      data:rows
    })
  })
}
)
//获取大分类下分页 数据的长度
app.get('/length', (req, res) => {
  var id1 = req.query.type_id;
  connection.query(id1 == 0?`select * from gift`:`select * from gift where type_id=${id1}`, function (err, rows, fields) {
    res.send({
      status:200,
      data:rows
    })
  })
}
)
//jump 跳转接口
app.get('/jump', (req, res) => {
  var id1 = req.query.id;
  connection.query(`select * from gift where id=${id1}`, function (err, rows, fields) {
    res.send({
      status:200,
      data:rows
    })
  })
}
)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))