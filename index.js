'use strict';

module.exports = function pff(str) {
    var strLen = str.length,
        a = 1,
        start = 0,
        end = -1,
        res = '';

    for (var i = 0; i < strLen; i++) {
        if (str[i] !== '%') {
            continue;
        }

        end = i;
        var modifier = str[i + 1];

        if (modifier === 's' || modifier === 'd') {
            var substitution = arguments[a++];

            if (modifier === 'd') {
                substitution = Math.floor(substitution);
            }

            res += str.substring(start, end);
            res += substitution;
            start = i + 2;
        }

        if (modifier === '%') {
            res += str.substring(start, end);
            res += '%';
            start = i + 2;
            i++;
        }
    }

    if (start < strLen) {
        res += str.substring(start);
    }

    return res;
};
