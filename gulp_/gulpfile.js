let gulp = require('gulp');
let uglify = require('gulp-uglify');

gulp.task('first',function(){
  gulp.src('./src/index.js')
      .pipe(uglify())
      .pipe(gulp.dest('./dist/'))
})
