const express = require('express');
const expressStatic = require('express-static');
const urlLib = require('url');


var server = express();

server.use('/1.html',function (req,res) {
	res.send({a:123,b:5});
	console.log(urlLib.parse(req.url))
	res.end()
})

server.listen('8080');
server.use(expressStatic('./Web'));