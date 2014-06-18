/* global describe, it */

'use strict';

require('should');
var pff = require('..');

describe('strings', function () {
    it('should substitute %s', function () {
        pff('%s', 'result').should.equal('result');
    });
});
