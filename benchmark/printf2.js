module.exports = function printf2(str) {
    var a = 1,
        res = [];

    var parts = (str + '').split('%'),
        len = parts.length,

        s = 's',
        d = 'd';

    len > 0 && res.push(parts[0]);

    for (var i = 1; i < len; i++) {
        var part = parts[i],
            first = part[0];

        if (first === s || first === d) {
            var value = arguments[a++];

            res.push(first === d ? ~~value : value);
        }

        res.push(part.substring(1));
    }

    return res.join('');
};
