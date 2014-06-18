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
});
