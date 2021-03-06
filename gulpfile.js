var gulp = require('gulp'),
    mainBowerFiles = require('main-bower-files'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat');


//gulp.task('copyFiles', function() {
//    gulp.src('./bower_components/**/*min*.js')
//        .pipe(gulp.dest('app/scripts/vendor'));
//});


gulp.task('bowerFiles', function () {
    return gulp.src(mainBowerFiles(), {base: './bower_components'})
        .pipe(gulp.dest('app/scripts/vendor'))
});


gulp.task('connect', function () {
    connect.server({
        root: 'app/',
        livereload: true
    })
});