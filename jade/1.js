const jade = require('jade');

var str = jade.renderFile('jade.html',{pretty:true});
console.log(str)