
// 載入外掛
var gulp = require('gulp'),  
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('gulp-autoprefixer'),
    // jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    // browserSync = require('browser-sync').create();
    livereload = require('gulp-livereload'),
    del = require('del');

// var reload = browserSync.reload;


// browserSync Static Server + watching scss/html files
// gulp.task('serve', ['styles'], function() {

//     browserSync.init({
//         server: "./source"
//     });

//     gulp.watch("source/sass/*.scss", ['styles']);
//     gulp.watch('source/**/*.slim').on('change', reload);

// });



// 建立任務
gulp.task('styles', function() { 
 	// 編譯 Sass、Autoprefix 及縮小化
	return gulp.src('source/sass/**/*.scss')
  		.pipe(sourcemaps.init())
	   	.pipe(sass().on('error', sass.logError))
	  	.pipe(postcss([require('autoprefixer')]))
  		.pipe(sourcemaps.write())
	    .pipe(gulp.dest('source/assets/styles'))
	    // .pipe(browserSync.reload({stream:true}))
	    .pipe(notify({ message: 'Styles task complete' }));
});


gulp.task('default',['watch'],  function() {  
    gulp.start('styles');
});

// browserSync 版 default
// gulp.task('default', ['serve']);

// Watch

gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('source/sass/**/*.scss', ['styles']);

  // // Watch .js files
  // gulp.watch('src/scripts/**/*.js', ['scripts']);

  // // Watch image files
  // gulp.watch('src/images/**/*', ['images']);

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['source/**']).on('change', livereload.changed);


});

