// 引入模块
var exec = require("child_process").exec;

function start(response) {
	console.log('The request is start');
	response.writeHead(200, {"Content-Type": "text/plain"});
	    response.write('default or base folder');
	    response.end();
	return "hello start";
}
function upLoad(response) {
	console.log('The request is upload');
	return "hello upload";
}
function logIn(response) {
	function sleep(sec) {
		var startTime = new Date().getTime();
		while (new Date().getTime() < startTime + sec);
	}
	
	var content = "empty";
	// 'ls-lah' scan all file
	var startTime = new Date().getTime();
	exec("find /",
		{ timeout: 10000, maxBuffer: 20000*1024 },
		function (err,stdout,stderr) {
		response.writeHead(200, {"Content-Type": "text/plain"});
	    response.write(stdout);
	    response.end();
	    sTime = new Date().getTime() - startTime ;
	console.log('The request is login outime'+ sTime );
	})
	return content;
}
function logOut(response) {
	console.log('The request is logout');
	return "hello logout";
}
exports.start = start;
exports.upLoad= upLoad;
exports.logIn = logIn;
exports.logOut= logOut;