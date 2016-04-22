var gulp       = require('gulp'),
    browserify = require('gulp-browserify');
    nodemon = require('gulp-nodemon');

gulp.task('scripts', function () {

    gulp.src(['app/main.js'])
        .pipe(browserify({
            debug: true,
            transform: [ 'reactify' ]
        }))
        .pipe(gulp.dest('./public/'));

});

gulp.task('default', ['scripts']);

/*
 * Start web server
 */
gulp.task('start-server', function() {
  nodemon({
    script: 'server.js',
    ext: 'js'
  });
});


