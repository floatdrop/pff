/* global describe, it */

'use strict';

require('should');
var pff = require('..');

describe('specifiers', function () {
    it('should preserve % in pattern', function () {
        pff('%s % %s', 'one', 'two').should.equal('one % two');
    });

    it('should preserve % in pattern', function () {
        pff('%s %% %s', 'one', 'two').should.equal('one %% two');
    });

    it('should substitute once in pattern', function () {
        pff('%s', 'result').should.equal('result');
    });

    it('should substitute twice in pattern', function () {
        pff('%s%s', 'one', 'two').should.equal('onetwo');
    });

    it('should substitute in the middle of pattern', function () {
        pff('one %s three', 'two').should.equal('one two three');
    });

    it('should substitute only patterns with defined values', function () {
        pff('one two %s %s', 'three').should.equal('one two three %s');
    });

    it('should ignore additional values for substitution', function () {
        pff('one two %s', 'three', 'four').should.equal('one two three');
    });

    it('should substitute %d', function () {
        pff('%d', 1).should.equal('1');
    });

    it('should substitute %d in the middle of pattern', function () {
        pff('one %d three', 2.4).should.equal('one 2 three');
    });

    it('should substitute %d with flooring', function () {
        pff('one %d three', 2.8).should.equal('one 2 three');
    });
});
