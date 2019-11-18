const gulp = require('gulp')
const conn = require('gulp-connect')
const open = require('gulp-open')

const browserify = require('browserify')
const reactify = require('reactify')
const source = require('vinyl-source-stream')
const concat = require('gulp-concat')
const lint = require('gulp-eslint')

const config = {
  port: 5500,
  baseUrl : 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js*',
    indexJs: './src/Index.js',
    css: [
      './node_modules/bootstrap/dist/css/bootstrap.min.css',
      './node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    ],
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

gulp.task( //html ( copies html files to dist for build)
  'html', 
  function() {
    gulp.src(config.paths.html)
      .pipe(gulp.dest(config.paths.dist))
      .pipe(conn.reload())
  }
)

gulp.task( // js (copies js files to dist for build)
  'js', 
  function() {
    browserify(config.paths.indexJs)
      .transform(reactify)
      .bundle()
      .on('error', console.error.bind(console))
      .pipe(source('bundle.js'))
      .pipe(gulp.dest(config.paths.dist + '/js'))
      .pipe(conn.reload())
  }
)

gulp.task ( // css (copies css files to dist for build))
  'css', function() {
    gulp.src(config.paths.css)
      .pipe(concat('bundle.css'))
      .pipe(gulp.dest(config.paths.dist + '/css'))
  }
)

gulp.task(
  'lint', 
  function() {
    return gulp.src(config.paths.js)
      .pipe(lint({config: '.eslintrc.json'}))
      .pipe(lint.format())
  }
)


gulp.task(
  'watch', 
  function() {
    gulp.watch(config.paths.html, ['html'])
    gulp.watch(config.paths.js, ['js'])
  }
)

gulp.task('default', ['html', 'js', 'css', 'lint', 'open', 'watch'])
