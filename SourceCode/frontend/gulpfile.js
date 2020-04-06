'use strict';
 
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var config = {
  serverPath: './',
  sassSource: './scss',
  cssDestination: './css',
  bundleFileName : 'style.css'
};

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: config.serverPath
    });

    gulp.watch(config.sassSource+"/**/*.scss",{cwd:'./'},['sass']);
    gulp.watch("./**/*.html",{cwd:'./'}).on('change', browserSync.reload);

    browserSync.watch()

});


gulp.task('sass', function () {
  return gulp.src(config.sassSource+'/**/*.scss')
    .pipe(concat(config.bundleFileName))
    .pipe(sass.sync().on('error', sass.logError))    
    .pipe(gulp.dest(config.cssDestination))
    .pipe(browserSync.stream({match: '**/*.css'}));
});