'use strict';

console.oldError = console.error;
console.error = function () {
    if (typeof arguments.stack !== 'undefined') {
        console.oldError.call(console, arguments.stack);
    } else {
        if (typeof arguments[4] !== 'undefined') { arguments[4] = '...'; }
        console.oldError.apply(console, arguments);
    }
};

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var runSequence = require('run-sequence');
var mocha = require('gulp-mocha');
var watch = require('gulp-watch');

var paths = {
    tests: 'test/*.js',
    src: [ 'index.js' ]
};

gulp.task('test', function () {
    process.env.MOCHA = true;
    return gulp.src(paths.tests, {read: false})
        .pipe(mocha({
            reporter: 'list',
            ui: 'bdd',
            slow: 500,
            timeout: 1000
        }));
});

gulp.task('watch', function () {
    return watch({glob: paths.src.concat(paths.tests)}, ['test']);
});

gulp.task('jshint', function () {
    return gulp.src('./api/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('default', runSequence.bind(runSequence, 'jshint', 'watch'));
