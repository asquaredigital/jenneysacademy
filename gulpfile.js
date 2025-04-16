const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// Source JS files (in order)
const jsFiles = [
  'javascript/jquery.min.js',
  'javascript/plugins.js',
  'javascript/jquery-countTo.js',
  'javascript/jquery-ui.js',
  'javascript/jquery-fancybox.js',
  'javascript/scroll-img.js',
  'javascript/jquery.mCustomScrollbar.concat.min.js',
  'javascript/parallax.js',
  'javascript/jquery-isotope.js',
  'javascript/equalize.min.js',
  'javascript/main.js'
];

gulp.task('scripts', function () {
  return gulp.src(jsFiles)
    .pipe(concat('main.js'))                  // Combine all JS
    .pipe(gulp.dest('dist/js'))               // Save unminified
    .pipe(rename('main.min.js'))              // Rename for minified
    .pipe(uglify())                            // Minify
    .pipe(gulp.dest('dist/js'));              // Save minified
});
