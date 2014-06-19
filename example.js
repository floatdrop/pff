'use strict';

var pff = function () {
    var pattern = arguments[0];

    var result = '';
    var idx = 0;

    for (var current = 1; current < arguments.length && idx !== -1; current++) {
        idx = pattern.indexOf('%');
        if (pattern[idx + 1] === 's' || pattern[idx + 1] === 'd') {
            result += pattern.slice(0, idx);
            result += arguments[current];
            pattern = pattern.slice(idx + 2);
        } else {
            current--;
        }
    }

    result += pattern;

    return result;
};

for (var i = 0; i < 100000; i++ ) {
    pff('feature.%s.%s.%s-feature.%s.%s.%s-feature.%s.%s.%s-feature.%s.%s.%s-feature.%s.%s.description', 'easyinterface', 'smartsearch', 'description', 'easyinterface', 'smartsearch', 'description', 'easyinterface', 'smartsearch', 'description', 'easyinterface', 'smartsearch', 'description', 'easyinterface', 'smartsearch');
}
