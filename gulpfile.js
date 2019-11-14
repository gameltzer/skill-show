const gulp = require('gulp')
const conn = require('gulp-connect')
const open = require('gulp-open')

const config = {
  port: 5500,
  baseUrl : 'http://localhost',
  paths: {
    html: './src/*.html',
    dist: './dist',
  },
}
gulp.task( // conn
  'conn', 
  function() {
    conn.server({
      root: ['dist'],
      port: config.port,
      base: config.baseUrl,
      livereload: true,
    })
  }
)

gulp.task( // open
  'open', 
  ['conn'], 
  function() {
    gulp.src('dist/index.html')
      .pipe(
        open(
          {uri: config.baseUrl + ':' + config.port + '/'}
        )
      )
  }
)

gulp.task(
  'html', 
  function() {
    gulp.src(config.paths.html)
      .pipe(gulp.dest(config.paths.dist))
      .pipe(conn.reload())
  }
)

gulp.task('default', ['html', 'open'])
