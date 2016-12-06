var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// 静态服务器
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
// });

// 代理

gulp.task('sync', function() {
	// browserSync({
	// 	files:"**",
	// 	server:{
	// 		proxy: "192.168.1.120/statichtml/moviehelper/app/"
	// 	}
	// });
    browserSync.init({
        proxy: "192.168.1.120/statichtml/moviehelper/app/"
    });
});
gulp.task('default',['browserSync']);