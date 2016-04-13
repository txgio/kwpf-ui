var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

var browserSync = require('browser-sync');
var spa = require('browser-sync-spa');

browserSync.use(spa());

var tsProject = ts.createProject('tsconfig.json');

gulp.task('clean', function() {
  return del('dist/**/*');
});

gulp.task('compile', ['clean'], function() {
  return tsProject
    .src()
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
    .js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/app'));
});

gulp.task('compile:inc', function() {
  return tsProject
    .src()
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
    .js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/app'));
});

gulp.task('copy:libs', ['clean'], function() {
  return gulp.src([
    'node_modules/es6-shim/es6-shim.min.js',
    'node_modules/systemjs/dist/system-polyfills.js',
    'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/rxjs/bundles/Rx.js',
    'node_modules/angular2/bundles/angular2.dev.js',
    'node_modules/angular2/bundles/router.dev.js'
  ],
    {
      base: 'node_modules'
    }).pipe(gulp.dest('dist/lib'));
});

gulp.task('copy:template', ['clean'], function() {
  return gulp.src([
    'template/**/*'
  ]).pipe(gulp.dest('dist/template'))
});

var assetsPatterns = ['app/**/*', 'index.html', 'styles.css', '!app/**/*.ts'];

var copyAssets = function() {
  return gulp.src(
    assetsPatterns,
    {
      base: './'
    }
  ).pipe(gulp.dest('dist'));
};

gulp.task('copy:assets', ['clean'], function() {
  return copyAssets();
});

gulp.task('copy:assets:inc', function() {
  return copyAssets();
});

gulp.task('serve', ['build'], function() {
  browserSync({server: './dist'});
  gulp.watch('app/**/*.ts', ['compile:inc', browserSync.reload]);
  gulp.watch(assetsPatterns, ['copy:assets:inc', browserSync.reload]);
});

gulp.task('build', ['clean', 'compile', 'copy:libs', 'copy:assets', 'copy:template']);

gulp.task('default', ['build']);