'use strict';


module.exports = function () {
    var result = '';
    var idx = 0;

    for (var current = 1; current < arguments.length && idx !== -1; current++) {
        idx = arguments[0].indexOf('%');
        if (arguments[0][idx + 1] === 's' || arguments[0][idx + 1] === 'd') {
            result += arguments[0].slice(0, idx);
            result += arguments[current];
            arguments[0] = arguments[0].slice(idx + 2);
        } else {
            current--;
        }
    }

    result += arguments[0];

    return result;
};
