"use strict";

import pkg from "./package.json";
import gulp from "gulp";
import plugins from "gulp-load-plugins";

const $ = plugins({
  pattern: ["*"],
  scope: ["devDependencies"],
});

console.log($);

const onError = (err) => console.log(err);

/**
 *  CHARACTER SET
 */
const encoding = "UTF-8";

/**
 *  SET PATH
 */
const DIR = {
  SRC: "src",
  BUILD: "build",
};

const BASE = {
  SCRIPT: "/assets/js",
  CSS: "/assets/css",
  SCSS: "/assets/styles",
  IMAGES: "/assets/images",
  FONTS: "/assets/fonts",
  FILES: "/assets",
  HTML: "/pages",
};

const PATH = {
  SCRIPT: {
    SRC: DIR.SRC + BASE.SCRIPT,
    BUILD: DIR.BUILD + BASE.SCRIPT,
    TARGET: DIR.SRC + BASE.SCRIPT + "/**/*.js",
  },
  CSS: {
    SRC: DIR.SRC + BASE.CSS,
    BUILD: DIR.BUILD + BASE.CSS,
    TARGET: DIR.SRC + BASE.CSS + "/**/*.css",
  },
  SCSS: {
    SRC: DIR.SRC + BASE.SCSS,
    BUILD: DIR.BUILD + BASE.SCSS,
    TARGET: DIR.SRC + BASE.SCSS + "/**/*.scss",
  },
  IMAGES: {
    SRC: DIR.SRC + BASE.IMAGES,
    BUILD: DIR.BUILD + BASE.IMAGES,
    TARGET: DIR.SRC + BASE.IMAGES + "/**/*.*",
  },
  FONTS: {
    SRC: DIR.SRC + BASE.FONTS,
    BUILD: DIR.BUILD + BASE.FONTS,
    TARGET: DIR.SRC + BASE.FONTS + "/**/*.{eot,woff,woff2,ttf,svg,otf}",
  },
  FILES: {
    SRC: DIR.SRC + BASE.FILES,
    BUILD: DIR.BUILD + BASE.FILES,
    TARGET: DIR.SRC + BASE.FILES + "/**/*.*",
  },
  HTML: {
    SRC: DIR.SRC + BASE.HTML,
    BUILD: DIR.BUILD + BASE.HTML,
    TARGET: DIR.SRC + BASE.HTML + "/**/*.{html,inc}",
  },
};

/**
 * TASK : HTML
 */
const htmlBeautifyOption = {
  indent_size: 2,
  indent_with_tabs: false,
  space_after_anon_function: false,
  keep_array_indentation: false,
  max_preserve_newlines: 1,
};
const html = async () => {
  console.log("Task : html");
  return gulp
    .src([PATH.HTML.TARGET, "!" + PATH.HTML.SRC + "/**/include/**/*.html"], { base: "" })
    .pipe($.plumber({ errorHandler: onError }))
    .pipe(
      $.fileInclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe($.htmlBeautify(htmlBeautifyOption))
    .pipe($.charset({ to: encoding, quiet: false }))
    .pipe(gulp.dest(PATH.HTML.BUILD))
    .pipe($.connect.reload());
};
const changeHtml = async (fileName) => {
  console.log("Task : changeHtml");
  const targetFile = fileName.replace(/\\/g, "/");
  let targetDir = targetFile.match(/[^\\](\w|[가-힣]|-)+(?=\.)/)[0] + ".html";
  targetDir = targetFile.replace(targetDir, "");
  targetDir = targetDir.replace(DIR.SRC + "/", "");
  return gulp
    .src([targetFile], { base: "" })
    .pipe($.plumber({ errorHandler: onError }))
    .pipe(
      $.fileInclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe($.htmlBeautify(htmlBeautifyOption))
    .pipe($.charset({ to: encoding, quiet: false }))
    .pipe(gulp.dest(DIR.BUILD + "/" + targetDir))
    .pipe($.connect.reload());
};

/**
 * TASK : CSS (SCSS)
 */
const css = async () => {
  console.log("Task : css");
  return gulp
    .src([PATH.SCSS.TARGET, "!/**/_*.scss"])
    .pipe($.plumber({ errorHandler: onError }))
    .pipe($.newer(PATH.SCSS.BUILD))
    .pipe($.sourcemaps.init())
    .pipe($.sass({ outputStyle: "compact", sourceMap: true }).on("error", $.sass.logError))
    .pipe(
      $.autoprefixer({
        cascade: false,
      })
    )
    .pipe($.sourcemaps.write())
    .pipe($.charset({ to: encoding }))
    .pipe(gulp.dest(PATH.SCSS.BUILD))
    .pipe($.connect.reload());
};
const cssBuild = async () => {
  console.log("Task : cssBuild");
  return gulp
    .src([PATH.SCSS.TARGET, "!/**/_*.scss"])
    .pipe($.plumber({ errorHandler: onError }))
    .pipe($.newer(PATH.SCSS.BUILD))
    .pipe($.sass({ outputStyle: "compact", sourceMap: false }).on("error", $.sass.logError))
    .pipe(
      $.autoprefixer({
        cascade: false,
      })
    )
    .pipe($.charset({ to: encoding }))
    .pipe(gulp.dest(PATH.SCSS.BUILD));
};

/**
 * TASK : JS
 */
const jsbeautifierOption = {
  indent_size: 2,
  indent_with_tabs: false,
  space_after_anon_function: false,
  keep_array_indentation: false,
  max_preserve_newlines: 1,
};
const script = async () => {
  console.log("Task : script");
  return $.mergeStream(
    gulp
      .src([PATH.SCRIPT.TARGET, "!" + PATH.SCRIPT.SRC + "/**/libs/*.js", "!" + PATH.SCRIPT.SRC + "/**/*.min.js"], { sourcemaps: true })
      .pipe($.babel({ presets: ["@babel/preset-env"] }))
      .pipe($.plumber({ errorHandler: onError }))
      .pipe($.newer(PATH.SCRIPT.BUILD))
      .pipe($.jsbeautifier(jsbeautifierOption)),

    gulp
      .src([PATH.SCRIPT.SRC + "/**/libs/*.js", PATH.SCRIPT.SRC + "/**/*.min.js"])
      .pipe($.plumber({ errorHandler: onError }))
      .pipe($.newer(PATH.SCRIPT.BUILD))
  )
    .pipe($.charset({ to: encoding }))
    .pipe(gulp.dest(PATH.SCRIPT.BUILD))
    .pipe($.connect.reload());
};
const scriptBuild = async () => {
  console.log("Task : scriptBuild");
  return $.mergeStream(
    gulp
      .src([PATH.SCRIPT.TARGET, "!" + PATH.SCRIPT.SRC + "/**/libs/*.js", "!" + PATH.SCRIPT.SRC + "/**/*.min.js"], { sourcemaps: false })
      .pipe($.babel({ presets: ["@babel/preset-env"] }))
      .pipe($.plumber({ errorHandler: onError }))
      .pipe($.newer(PATH.SCRIPT.BUILD))
      .pipe($.jsbeautifier(jsbeautifierOption)),

    gulp
      .src([PATH.SCRIPT.SRC + "/**/libs/*.js", PATH.SCRIPT.SRC + "/**/*.min.js"])
      .pipe($.plumber({ errorHandler: onError }))
      .pipe($.newer(PATH.SCRIPT.BUILD))
  )
    .pipe($.charset({ to: encoding }))
    .pipe(gulp.dest(PATH.SCRIPT.BUILD));
};

/**
 * TASK : IMAGE
 */
const images = async () => {
  console.log("Task : images");
  return gulp
    .src([PATH.IMAGES.TARGET])
    .pipe($.plumber({ errorHandler: onError }))
    .pipe($.newer(PATH.IMAGES.BUILD))
    .pipe($.imagemin())
    .pipe(gulp.dest(PATH.IMAGES.BUILD))
    .pipe($.connect.reload());
};

/**
 * TASK : Fonts
 */
const fonts = async () => {
  console.log("Task : fonts");
  return gulp
    .src([PATH.FONTS.TARGET])
    .pipe($.plumber({ errorHandler: onError }))
    .pipe($.newer(PATH.FONTS.BUILD))
    .pipe(gulp.dest(PATH.FONTS.BUILD))
    .pipe($.connect.reload());
};

/**
 * ETC - Files
 */
// const files = async () => {
//   console.log("Task : files");
//   return gulp
//     .src([PATH.FILES.TARGET, "!" + PATH.FILES.SRC + "/**/*.js", "!" + PATH.FILES.SRC + "/**/*.scss", "!" + PATH.FILES.SRC + "/**/include/**/*.html"])
//     .pipe($.plumber({ errorHandler: onError }))
//     .pipe($.newer(PATH.FILES.BUILD))
//     .pipe(gulp.dest(PATH.FILES.BUILD))
//     .pipe($.connect.reload());
// };

/**
 * Clean
 */
const clean = async () => {
  console.log("Task : clean");
  return $.del.sync([DIR.BUILD]);
};

/**
 * Run Server
 * LiveReload
 */
const connect = async () => {
  console.log("Task : connect");
  $.connect.server({
    root: DIR.BUILD,
    host: "0.0.0.0",
    livereload: true,
    port: 8888,
  });
};

/**
 * Watch
 */
const watch = async () => {
  console.log("Task : watch");
  gulp.watch([PATH.HTML.TARGET], { cwd: "./", events: "all" }).on("change", (file) => {
    if (file.indexOf("include") >= 0) {
      html();
    } else {
      changeHtml(file);
    }
  });
  gulp.watch([PATH.CSS.TARGET, PATH.SCSS.TARGET], { cwd: "./", events: "all" }, gulp.series(css));
  gulp.watch([PATH.SCRIPT.TARGET], { cwd: "./", events: "all" }, gulp.series(script));

  gulp.watch([PATH.IMAGES.TARGET], { cwd: "./", events: "all" }, gulp.series(images));
  gulp.watch([PATH.FONTS.TARGET], { cwd: "./", events: "all" }, gulp.series(fonts));
  // gulp.watch([PATH.FILES.TARGET], { cwd: "./", events: "all" }, gulp.series("files"));
};

/**
 * Default Local Build
 */

gulp.task("default", gulp.series(clean, gulp.parallel(connect, html, css, script, images, fonts, watch)), () => {
  console.log("Gulp is running");
});

gulp.task("build", gulp.series(clean, gulp.parallel(html, cssBuild, scriptBuild, images, fonts)), () => {
  console.log("Finished build");
});
