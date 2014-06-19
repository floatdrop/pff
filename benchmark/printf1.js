module.exports = function printf1_(str) {
    var strLen = str.length,
        a = 1,
        start = 0,
        end = -1,
        res = [],
        s = 's',
        d = 'd';

    for (var i = 0; i < strLen; i++) {
        var l = str[i];

        if (l === '%') {
            end = i;
            continue;
        }

        if (end > -1) {
            if (l === s || l === d) {
                var value = arguments[a++];

                if (l === d) {
                    value = ~~value;
                }

                res.push(str.substring(start, end));
                res.push(value);
                start = i + 1;
            }
            end = -1;
        }
    }

    if (start < strLen) {
        res.push(str.substring(start));
    }

    return res.join('');
};
