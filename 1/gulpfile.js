var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('*/*.*',function(file){
        livereload.changed(file.path);
    });
});


// 运行server: $ http-server
// 运行 gulp watch:  $ gulp watch