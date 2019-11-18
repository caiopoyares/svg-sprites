const gulp = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require("node-sass");

gulp.task("sass", compileSass);
gulp.task("watch", watchSass);

function compileSass(cb) {
  return gulp
    .src("assets/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("assets/css"));
}

function watchSass(cb) {
  gulp.watch("assets/scss/**/*.scss", compileSass);
}
