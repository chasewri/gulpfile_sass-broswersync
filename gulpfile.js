"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();

gulp.task("sync", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
});

gulp.task("sass", function () {
  return gulp.src("sass/main.scss").pipe(sass()).pipe(gulp.dest("css/"));
});

gulp.task("serve", function () {
  browserSync.init({
    server: "./",
  });

  gulp.watch('sass/*.scss', gulp.series(['sass']))
  gulp.watch("css/main.css").on("change", browserSync.reload);
  gulp.watch("index.html").on("change", browserSync.reload);
});
