var server = require('./server/server.js');
var route  = require('./server/route.js');
var requestHandlers = require('./server/requestHandlers.js');


var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;


server.start(route.route,handle);