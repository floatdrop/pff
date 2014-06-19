'use strict';

function getRandomString () {
    return (Math.random() * 100).toString(16);
}

function getRandomArgs (n) {
    var args = [];
    for (var i = 0; i < n; i++) {
        args.push(getRandomString());
    }
    return args;
}

function getRandomPattern (n) {
    var pattern = '';
    for (var i = 0; i < n; i++) {
        pattern += getRandomString() + '%s';
    }
    pattern += getRandomString();
    return pattern;
}

function makeBench(func, n) {
    var args = getRandomArgs(n);
    args.unshift(getRandomPattern(n));
    return function () {
        func.apply(null, args);
    };
}

module.exports = {
    getRandomString: getRandomString,
    getRandomArgs: getRandomArgs,
    getRandomPattern: getRandomPattern,
    makeBench: makeBench
};
