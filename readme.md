# pff [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]
> Minimal printf implementation

__No more words, show me the numbers!__

```bash
                      pff
       2,441,764 op/s » tiny (prod)
         801,082 op/s » short (prod)
       1,166,098 op/s » tiny (rand)
         631,365 op/s » short (rand)

                      split
       2,114,952 op/s » tiny (prod)
         802,989 op/s » short (prod)
         865,586 op/s » tiny (rand)
         543,494 op/s » short (rand)

                      indexOf
       2,022,874 op/s » tiny (prod)
         632,910 op/s » short (prod)
       1,403,645 op/s » tiny (rand)
         723,594 op/s » short (rand)

                      util.format
         522,907 op/s » tiny (prod)
         285,980 op/s » short (prod)
         468,036 op/s » tiny (rand)
         319,494 op/s » short (rand)

                      node-printf
          57,178 op/s » tiny (prod)
          23,387 op/s » short (prod)
          52,155 op/s » tiny (rand)
          30,923 op/s » short (rand)
```

Run yourself to get numbers relevant to your hardware:

```bash
$ npm i
$ npm run bench
```

## Usage

```js
var pff = require('pff');

console.log(pff('%s world from %d year!', 'Hello', 2014.7));
// Hello world from 2014 year!
```

## Specifiers

| Specifier     | What it does          | Example                     | Result           |
| ------------: | --------------------- | --------------------------- | ---------------- |
| **%s**        | String                | `pff('Hello %s', 'world')`  | `'Hello world'`  |
| **%d**        | Floored number        | `pff('My age is %d', 13.2)` | `'My age is 13'` |
| **%%**        | Percent               | `pff('100%%s cool!')`       | `'100%s cool!'`  |

Not much, but hey! - it's fast!

# License

MIT (c) 2014 Vsevolod Strukchinsky (floatdrop@gmail.com)

[npm-url]: https://npmjs.org/package/pff
[npm-image]: http://img.shields.io/npm/v/pff.svg

[travis-url]: https://travis-ci.org/floatdrop/pff
[travis-image]: http://img.shields.io/travis/floatdrop/pff.svg
