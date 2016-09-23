
function route(handle,path,response) {
	if (path == null || path == undefined || path =='') { return };
	// console.log(path+'++++++++');
	// console.log(handle)
	if (typeof handle[path] === 'function') {
		return handle[path](response);
	}else{
			console.log("No request handler found for " + pathname);
		    response.writeHead(404, {"Content-Type": "text/plain"});
		    response.write("404 Not found");
		    response.end();

		console.log('No request handler found for '+ path);
	}
}

// 暴露route 到外部 让外部可以调用 引入该模块的地方可以使用route这个模块
exports.route = route ;