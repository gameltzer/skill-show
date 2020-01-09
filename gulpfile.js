const gulp = require('gulp')
const connImport = require('gulp-connect')
const openImport = require('gulp-open')

const browserify = require('browserify')
const reactify = require('reactify')
const source = require('vinyl-source-stream')
const concat = require('gulp-concat')
const lintImport = require('gulp-eslint')

const config = {
  port: 5500,
  baseUrl : 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js*',
    indexJs: './src/Index.jsx',
    css: [
      './node_modules/bootstrap/dist/css/bootstrap.min.css',
      './node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      './src/css/*.css',
      './node_modules/toastr/build/toastr.css'
    ],
    dist: './dist',
  },
}

function conn(cb){
  connImport.server({
    root: ['dist'],
    port: config.port,
    base: config.baseUrl,
    livereload: true,
  })
  cb()
}

function open(cb) {
  gulp.src('dist/index.html')
    .pipe(
      openImport(
        {uri: config.baseUrl + ':' + config.port + '/'}
      )
    )
  cb()
}

function html(cb){
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connImport.reload())
  cb()
}

function js(cb){
  browserify(config.paths.indexJs)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/js'))
    .pipe(connImport.reload())
  cb()
}


function css(cb) {
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/css'))
  cb()
}
gulp.task ( // css (copies css files to dist for build))
  'css', function() {
    gulp.src(config.paths.css)
      .pipe(concat('bundle.css'))
      .pipe(gulp.dest(config.paths.dist + '/css'))
  }
)

//TODO
gulp.task(
  'lint', 
  function() {
    return gulp.src(config.paths.js)
      .pipe(lintImport({config: '.eslintImportrc.json'}))
      .pipe(lintImport.format())
  }
)

function watch(cb){
  gulp.watch(config.paths.html, html)
  gulp.watch(config.paths.js, js)
  gulp.watch(config.paths.css, css)
  cb()
}

exports.default = gulp.series(gulp.parallel(html, js, css), conn, open, watch)
