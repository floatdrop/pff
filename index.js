'use strict';


module.exports = function () {
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
