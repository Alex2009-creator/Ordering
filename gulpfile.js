const gulp = require("gulp");
const sass = require("gulp-sass")(require('sass'));


function build() {
  return gulp.src('style/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('style/'));
};

function watch() {
  gulp.watch("style/*.scss", { delay: 500, ignoreInitial: false }, build);
}


exports.default = watch;