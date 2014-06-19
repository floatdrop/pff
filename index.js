'use strict';


module.exports = function () {
    var result = '';
    var idx = 0;
    var lastIdx = -1;

    for (var current = 1; current < arguments.length && idx !== -1; current++) {
        idx = arguments[0].indexOf('%', lastIdx);
        if (arguments[0][idx + 1] === 's' || arguments[0][idx + 1] === 'd') {
            result += arguments[0].substring(lastIdx, idx);
            result += (arguments[0][idx + 1] === 'd') ? Math.floor(arguments[current]) : arguments[current];
            lastIdx = idx + 2;
        } else {
            current--;
        }
    }

    result += arguments[0].substring(lastIdx);

    return result;
};
