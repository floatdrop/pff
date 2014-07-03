'use strict';

module.exports = function (ptrn) {
    var result = '';
    var idx = 0;
    var lastIdx = -1;

    for (var current = 1; current < arguments.length; current++) {
        idx = ptrn.indexOf('%', lastIdx);
        if (idx === -1) { break; }
        if (ptrn[idx + 1] === 's' || ptrn[idx + 1] === 'd') {
            result += ptrn.substring(lastIdx, idx);
            result += (ptrn[idx + 1] === 'd') ? Math.floor(arguments[current]) : arguments[current];
            lastIdx = idx + 2;
        } else if (ptrn[idx + 1] === '%') {
            result += ptrn.substring(lastIdx, idx + 1);
            lastIdx = idx + 2;
            current--;
        } else {
            result += ptrn.substring(lastIdx, idx + 2);
            lastIdx = idx + 2;
            current--;
        }
    }

    result = result + ptrn.substring(lastIdx);

    return result;
};
