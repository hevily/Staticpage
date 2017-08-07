var staticdir = ''
// 如果不适用本地服务器更改定义staticdir为非空项目目录即可 如当前目录'./';'e:/youproject/'
// 以下定义为proxy 本地启动服务器 动态页面设定
// 定义具体项目目录
var Products= 'ZYJ/';
// define 本地开发目录
var baseserver		= 'localhost/moviehelper/app/',
 baseserver_dir 	= '/Users/chunhua/WorkSpace/moviehelper/app/',
 conf = {
	server:{
		static:staticdir,
		proxy:baseserver+Products,
		proxy_dir:baseserver_dir+Products
	}
}

// import require pulgin
	var gulp    = require('gulp');
	var bs		= require('browser-sync').create();

	// task
//init server
gulp.task('initserver',function(){
	conf.server.static !=""
	?
	bs.init({
		 server: {
            baseDir: conf.server.static
        }
    })
	:
	bs.init({
		proxy:conf.server.proxy
	})
})

// watch css html js
gulp.task('watch',function(){
	conf.server.static !=""
	?
	folder = conf.server.static
	:
	folder = conf.server.proxy_dir;
	// var date = new Date();
	gulp.watch(folder+'**/*.html',function (event) {
		console.log("File →"+event.path+"← changed,watching....")

		// console.log(Date.getDate())
		return gulp.src(event.path)
			.pipe(bs.reload({stream:true}));
	});

	gulp.watch(folder+'**/*.css',function (event) {
		console.log("File →"+event.path+"← changed,watching....")
		return gulp.src(event.path)
			.pipe(bs.reload({stream:true}));
	});

	gulp.watch(folder+'**/*.js',function(event){
		console.log("File →"+event.path+"← changed,watching....")
		return gulp.src(event.path)
			.pipe(bs.reload({stream:true}));
	})
});

gulp.task('default',['initserver','watch']);
