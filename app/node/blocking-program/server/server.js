// import
var http = require('http');
var url  = require('url');

function start(route,handle) {
	function onRequest(request,response) {
		var postData = '';
		var pathname = url.parse(request.url).pathname;
		console.log('Request for '+ pathname +'received.');


		request.setEncoding('utf-8');
		request.addListener('data',function (postDataChunk) {
			postData += postDataChunk ;
			console.log('Recived POST data chunk '+ postDataChunk);

		})
		request.addListener('end',function () {
			route(handle,pathname,response);
		})
		// response.writeHead(200,{'Content-Type':'text/plain'});
		// var content = route(handle,pathname,response);
		// response.write(content);
		// response.end();
	}
	http.createServer(onRequest).listen(8888);
	
}

exports.start = start;