'use strict';

module.exports = function pff(str) {
    var strLen = str.length,
        a = 1,
        start = 0,
        end = -1,
        res = '';

    for (var i = 0; i < strLen; i++) {
        var l = str[i];

        if (l === '%') {
            end = i;
            continue;
        }

        if (end > -1) {
            if (l === 's' || l === 'd') {
                var value = arguments[a++];

                if (l === 'd') {
                    value = Math.floor(value);
                }

                res += str.substring(start, end);
                res += value;
                start = i + 1;
            }
            end = -1;
        }
    }

    if (start < strLen) {
        res += str.substring(start);
    }

    return res;
};
