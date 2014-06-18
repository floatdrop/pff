/* global describe, it */

'use strict';

require('should');
var pff = require('..');

describe('strings', function () {
    it('should substitute %d', function () {
        pff('%d', 1).should.equal('1');
    });
});
