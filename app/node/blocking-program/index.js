// 引入模块 server/server.js 将引入的对象赋值给本地server变量并使用

	var server = require('./server/server.js');
	var route  = require('./server/route.js');
	var requestHandlers = require('./server/requestHandlers.js');


	var handle = {};
	handle['/'] = requestHandlers.start;
	handle['/start'] = requestHandlers.start;
	handle['/upload'] = requestHandlers.upLoad;
	handle['/login'] = requestHandlers.logIn;
	handle['/logout'] = requestHandlers.logOut;


// 启动服务
server.start(route.route,handle);
