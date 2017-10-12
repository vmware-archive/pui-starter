const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('copy-staticfile', () => {
  return gulp.src('Staticfile').pipe(gulp.dest('public'));
});

gulp.task('compile', (done) => {
  const {NODE_ENV: env} = process.env;
  process.env.NODE_ENV = 'production';
  runSequence('clean-assets', 'assets', 'assets-config', 'copy-staticfile',
    () => {
      process.env.NODE_ENV = env;
      done();
    });
});
