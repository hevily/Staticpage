// 用户自定变量
var httpReceivedTimes = 0;

/*
	引入模块 http url
 */
var http = require('http');
var url  = require('url');

function start (route,handle) {
	// 每次请求时处理
	function onRequest (req,res){
		// 路径
		var pathname = url.parse(req.url).pathname;
		console.log(pathname);
		// 响应内容
			// 响应头部
			// res.writeHead(200,{'Content-Type':'text/plain'});
			// 响应内容
		var content = route(handle,pathname,res);
			// res.write(content);
			// 响应结束
			// res.end();

		// 统计请求次数
		httpReceivedTimes++;
		// console.log('第-'+httpReceivedTimes+'-次请求')
	}
	// 创建请求处理 监听端口
	http.createServer(onRequest).listen(80);
	console.log('http is runing');
}
// 暴露外部访问 exports.funName = funName
exports.start = start;