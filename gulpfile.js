// conf
	var conf ={
		server:{
			static:'',
			proxy : 'work.com/moviehelper/app/vuejs/',
			proxy_dir:'d:/WorkSpace/moviehelper/app/vuejs/'
		}
	}
// require 
	var gulp 	= require('gulp');
	var bs 		= require('browser-sync').create();
// tasks
	// broser-sync init server
	gulp.task('bsserver', function() {
		conf.server.static !=''
		?
	    bs.init({
	        server: "./app"
	    })
		:
	    bs.init({
	        proxy: conf.server.proxy
	    });
	});
	// gulp.wath
	gulp.task('watch',function () {
		gulp.watch(conf.server.proxy_dir+'**/*.html',function (event) {
			console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
			return gulp.src(event.path)
				.pipe(bs.reload({stream:true}))
		});
		gulp.watch(conf.server.proxy_dir+'**/*.css',function (event) {
			console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
			return gulp.src(event.path)
				.pipe(bs.reload({stream:true}))
			// bs.reload() too low and skip away by node pipe stream
		})
	})
	// default task
	gulp.task('default', ['bsserver','watch']);