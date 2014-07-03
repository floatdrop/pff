/*global suite, bench */
'use strict';

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

suite('for', tests.bind(null, require('./for.js')));
suite('split', tests.bind(null, require('./split.js')));
suite('indexOf', tests.bind(null, require('./indexOf.js')));
suite('util.format', tests.bind(null, require('util').format));
suite('sprint', tests.bind(null, require('sprint')));
suite('node-printf', tests.bind(null, require('printf')));
