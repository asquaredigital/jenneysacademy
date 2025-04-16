const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('scripts', function () {
  return gulp.src([
    'javascript/jquery.min.js',
    'javascript/jquery-ui.js',
    'javascript/plugins.js',
    'javascript/jquery-countTo.js',
    'javascript/jquery-fancybox.js',
    'javascript/scroll-img.js',
    'javascript/flex-slider.min.js',
    'javascript/owl.carousel.min.js',
    'javascript/jquery.mCustomScrollbar.concat.min.js',
    'javascript/parallax.js',
    'javascript/jquery-isotope.js',
    'javascript/equalize.min.js',
    'javascript/main.js',
    'rev-slider/js/jquery.themepunch.tools.min.js',
    'rev-slider/js/jquery.themepunch.revolution.min.js',
    'rev-slider/js/extensions/extensionsrevolution.extension.actions.min.js',
    'rev-slider/js/extensions/extensionsrevolution.extension.carousel.min.js',
    'rev-slider/js/extensions/extensionsrevolution.extension.kenburn.min.js',
    'rev-slider/js/extensions/extensionsrevolution.extension.layeranimation.min.js',
    'rev-slider/js/extensions/extensionsrevolution.extension.migration.min.js',
    'rev-slider/js/extensions/extensionsrevolution.extension.navigation.min.js',
    'rev-slider/js/extensions/extensionsrevolution.extension.parallax.min.js',
    'rev-slider/js/extensions/extensionsrevolution.extension.slideanims.min.js',
    'rev-slider/js/extensions/extensionsrevolution.extension.video.min.js'
  ])
  .pipe(concat('bundle.min.js'))
  .pipe(gulp.dest('dist'));
});
