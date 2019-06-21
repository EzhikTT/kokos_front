const {src, dest, parallel} = require('gulp');
const pug = require('gulp-pug');
const scss = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

function html() {
    return src('client/templates/*.html')
    // .pipe(pug())
    .pipe(dest('build/html'))
}

function css() {
    return src('client/templates/*.scss')
    .pipe(scss())
    .pipe(minifyCSS())
    .pipe(dest('build/css'))
}

function js() {
    return src('client/javascript/*.js', {sourcemaps: true})
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('app.min.js'))
    .pipe(dest('build/js', {sourcemaps: true}))
}

exports.js = js;
exports.css = css;
exports.html = html;
exports.default = parallel(html, css, js);