const gulp = require("gulp");
const { series, parallel } = require('gulp');
const concat = require("gulp-concat");
const less = require("gulp-less");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const sourcemaps = require("gulp-sourcemaps");
// const rename = require("gulp-rename");
const DIR = {
  src: "./src/**/*.less",
  lib: "./babels/lib",
  es: "./babels/es"
};

function lessProcedure () {
  return gulp
    .src(DIR.src)
    .pipe(gulp.dest(DIR.lib))
    .pipe(gulp.dest(DIR.es));
}

function cssProcedure () {
  return gulp
  .src(DIR.src)
  .pipe(sourcemaps.init())
  .pipe(less())
  .pipe(autoprefixer())
  .pipe(cssnano())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(DIR.lib))
  .pipe(gulp.dest(DIR.es));
}


module.exports = {
  style: series([lessProcedure, cssProcedure])
};
