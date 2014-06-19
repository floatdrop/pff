/*global suite, bench */
'use strict';

var pff = require('..');
var utils = require('./utils.js');

function tests (func) {
    bench('tiny (prod)', function () {
        func('/i/%s/%s/%s/carousel.%d.jpg', 'some', 'folder', 'with', 5);
    });

    bench('short (prod)', function () {
        func('feature.%s.%s.%s-feature.%s.%s.%s-feature.%s.%s.%s-feature.%s.%s.%s-feature.%s.%s.description', 'easyinterface', 'smartsearch', 'description', 'easyinterface', 'smartsearch', 'description', 'easyinterface', 'smartsearch', 'description', 'easyinterface', 'smartsearch', 'description', 'easyinterface', 'smartsearch');
    });

    bench('tiny (rand)', utils.makeBench(func, 5));
    bench('short (rand)', utils.makeBench(func, 10));
}

suite('pff', tests.bind(null, pff));
suite('split', tests.bind(null, require('./split.js')));
suite('indexOf', tests.bind(null, require('./indexOf.js')));
suite('printf', tests.bind(null, require('printf')));
