module.exports = function printf2(str) {
    var a = 1,
        res = '';

    var parts = (str + '').split('%'),
        len = parts.length;

    if (len > 0) { res += parts[0]; }

    for (var i = 1; i < len; i++) {
        if (parts[i][0] === 's' || parts[i][0] === 'd') {
            var value = arguments[a++];
            res += parts[i][0] === 'd' ? Math.floor(value) : value;
        } else {
            res += '%' + (parts[i][0]||'');
        }

        res += parts[i].substring(1);
    }

    return res;
};
