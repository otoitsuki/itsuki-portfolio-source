
// 載入外掛
var gulp = require('gulp'),  
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('gulp-autoprefixer'),
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
	return gulp.src('source/sass/**/*.scss')
  		.pipe(sourcemaps.init())
	   	.pipe(sass().on('error', sass.logError))
	  	.pipe(postcss([require('autoprefixer')]))
  		.pipe(sourcemaps.write())
	    .pipe(gulp.dest('source/assets/styles'))
	    // .pipe(browserSync.reload({stream:true}))
	    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', function() {  
  return gulp.src('source/javascript/**/*.js')
    .pipe(uglify())
    // .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('source/assets/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('images', function() {  
  return gulp.src('source/images/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('source/assets/images'))
    .pipe(notify({ message: 'Images task complete' }));
});


// browserSync 版 default
// gulp.task('default', ['serve']);

// Gulp default 工作
gulp.task('default',['watch'],  function() {  
    gulp.start('styles', 'scripts' , 'images');
});

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('source/sass/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('source/javascript/**/*.js', ['scripts']);

  // Watch image files
  gulp.watch('source/images/**/*', ['images']);

  // Create LiveReload server
  // livereload.listen();

  // Watch any files in dist/, reload on change
  // gulp.watch(['source/**']).on('change', livereload.changed);


});

