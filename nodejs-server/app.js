var http = require('http')
var express = require('express')

var app = express()

http.createServer(app).listen(8001)

app.use(express.static('../public'))