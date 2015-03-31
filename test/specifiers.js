/* global describe, it */

'use strict';

require('should');
var pff = require('..');

describe('pff', function () {
    it('should substitute short string right', function () {
        pff('/i/%s/%s/%s/carousel.%d.jpg', 'some', 'folder', 'with', 5)
            .should.equal('/i/some/folder/with/carousel.5.jpg');
    });

    it('should substitute medium string right', function () {
        pff('feature.%s.%s.%s-feature.%s.%s.%s-feature.%s.%s.%s-feature.%s.%s.%s-feature.%s.%s.description', 'easyinterface', 'smartsearch', 'description', 'easyinterface', 'smartsearch', 'description', 'easyinterface', 'smartsearch', 'description', 'easyinterface', 'smartsearch', 'description', 'easyinterface', 'smartsearch')
            .should.equal('feature.easyinterface.smartsearch.description-feature.easyinterface.smartsearch.description-feature.easyinterface.smartsearch.description-feature.easyinterface.smartsearch.description-feature.easyinterface.smartsearch.description');
    });

    it('should preserve % in pattern', function () {
        pff('%s % %s', 'one', 'two').should.equal('one % two');
    });

    it('should replace %% with %', function () {
        pff('%s %% %s', 'one', 'two').should.equal('one % two');
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

    it('should substitute only patterns with defined values, otherwise - undefined', function () {
        pff('one two %s %s', 'three').should.equal('one two three undefined');
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

    it('should substitute %% with %', function () {
        pff('one %%s three', 'wow').should.equal('one %s three');
    });

    it('should substitute undefined and null', function () {
        pff('one %s three', undefined).should.equal('one undefined three');
        pff('one %s three', null).should.equal('one null three');
    });
});
