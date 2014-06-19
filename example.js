'use strict';

var utils = require('./benchmark/utils.js');
var pff = require('./index.js');

var bench = utils.makeBench(pff, 10);
for (var i = 0; i < 1000000; i++ ) {
    bench();
}
