var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass 		= require('gulp-sass');
var reload 		= browserSync.reload;
// 静态服务器
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
// });

// 代理

gulp.task('browserSync', function() {
	console.log('gulp')
    browserSync.init({
        proxy: "work.com/moviehelper/app/YSJ-HomePage/"
    });
    // gulp.watch('./**/*.scss',['sass']);
    gulp.wathc('./**/**/*.*').on('change',function(){
    	console.log('file changed')
    	reload;
    });

});
gulp.task('sass',function(){
	console.log('sass-build');

})
gulp.task('default',['browserSync']);