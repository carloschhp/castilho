const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

function compileSass() {
  return gulp.src('src/css/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
}

function minifyJS() {
  return gulp.src('src/js/script.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'));
}

function moveHTML() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
}

gulp.task('sass', compileSass);
gulp.task('js', minifyJS);
gulp.task('html', moveHTML);

gulp.task('default', gulp.parallel('sass', 'js', 'html'));

// Nova tarefa para assistir aos arquivos SCSS
gulp.task('watchSass', () => {
  gulp.watch('src/css/**/*.scss', gulp.series('sass'));
});

// Tarefa watch atualizada para incluir a observação dos arquivos SCSS
gulp.task('watch', gulp.series('sass', 'js', 'html', 'watchSass'));

