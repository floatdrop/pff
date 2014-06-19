/*global suite, bench */
'use strict';

var pff = require('..');
var utils = require('./utils.js');

function tests (func) {
    bench('tiny (5)', utils.makeBench(func, 5));
    bench('short (10)', utils.makeBench(func, 10));
    bench('medium (100)', utils.makeBench(func, 100));
}

suite('pff', tests.bind(null, pff));
suite('printf', tests.bind(null, require('printf')));
suite('printf2', tests.bind(null, require('./printf2.js')));
