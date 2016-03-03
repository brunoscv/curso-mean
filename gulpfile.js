var gulp       = require('gulp');
var uglify     = require('gulp-uglify');
var concat     = require('gulp-concat');
var livereload = require('gulp-livereload');

var source = {
  npm: 'node_modules',
  css: 'public/app/css',
  js: 'public/app/js'
};

gulp.task('css', function () {
  return livereload();
});

gulp.task('js', function() {
  return gulp.src([
    '!' + source.js + '/app.min.js',
    source.npm + '/angular/angular.min.js',
    source.npm + '/angular-ui-router/release/angular-ui-router.min.js',
    source.npm + '/angular-resource/angular-resource.min.js',
    source.js + '/app.js',
    source.js + '/config.js',
    source.js + '/routes.js',
    source.js + '/app.run.js',
    source.js + '/**/*.js'
    ])
    .pipe(concat('app.min.js'))
    // .pipe(uglify({mangle: true}))
    .pipe(gulp.dest(source.js))
    .pipe(livereload());
});

gulp.task('default', ['css', 'js']);
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(source.css + '/**/*.css', ['css']);
  gulp.watch(['!' + source.js + '/app.min.js', source.js + '/**/*.js'], ['js']);
});
