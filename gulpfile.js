const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("styles", () => {
  return gulp
    .src("src/css/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("styles.min.css"))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"));
});

gulp.task("scripts", () => {
  return gulp
    .src("src/js/**/*.js")
    .pipe(concat("scripts.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});

gulp.task("watch", () => {
  gulp.watch("src/css/**/*.scss", gulp.series("styles"));
  gulp.watch("src/js/**/*.js", gulp.series("scripts"));
});

gulp.task("default", gulp.parallel("styles", "scripts", "watch"));
