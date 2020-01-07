const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');

const NODE_SERVER_DEST = 'dist';

gulp.task('cleanAll', () => {
  return del([
    NODE_SERVER_DEST
  ]);
});

gulp.task('copyNodeModules', () => {
  return gulp.src('node_modules/**/*.*', {
    base: '.'
  }).pipe(gulp.dest(NODE_SERVER_DEST));
});

gulp.task('cleanOther', () => del([
  `${NODE_SERVER_DEST}/**/*.*`,
  `!${NODE_SERVER_DEST}/node_modules/**/*.*`])
);

gulp.task('cleanNodeModule', () => {
  return del[NODE_SERVER_DEST + '/node_modules'];
});

gulp.task('watch', () => {
  return gulp.watch('src/**/*.*', { verbose: true }, gulp.series('dev-repeat'));
});

gulp.task('copyNoJs', () => {
  return gulp.src(['src/**/*.*', '!src/**/*.js'], {
    base: '.'
  }).pipe(gulp.dest(NODE_SERVER_DEST));
});

gulp.task('babeljs', () => {
  return gulp.src(['src/**/*.js', '!node_modules/**/*.*'], {
    base: '.'
  }).pipe(babel({
    presets: ['@babel/env'],
    plugins: ['@babel/transform-runtime']
  }))
    .pipe(gulp.dest(NODE_SERVER_DEST));
});

gulp.task('dev-repeat', gulp.series('cleanOther', 'babeljs', 'copyNoJs'));

gulp.task('dev',
  gulp.series('cleanAll', 'copyNodeModules', 'babeljs', 'copyNoJs', 'watch'));

gulp.task('buid',
  gulp.series('cleanAll', 'copyNodeModules', 'babeljs', 'copyNoJs'));
