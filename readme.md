# pff [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]
> Minimal printf realization

__No more words, show me the numbers!__

```bash
                      pff
       1,486,418 op/s » tiny (prod)
         478,850 op/s » short (prod)
         709,008 op/s » tiny (rand)
         371,153 op/s » short (rand)

                      split
       1,178,397 op/s » tiny (prod)
         374,882 op/s » short (prod)
         375,813 op/s » tiny (rand)
         234,926 op/s » short (rand)

                      indexOf
         895,898 op/s » tiny (prod)
         281,566 op/s » short (prod)
         612,692 op/s » tiny (rand)
         340,322 op/s » short (rand)

                      printf
          39,488 op/s » tiny (prod)
          15,591 op/s » short (prod)
          37,811 op/s » tiny (rand)
          20,382 op/s » short (rand)
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

| Specifier     | What it does          | Example                   | Result         |
| ------------- | --------------------- | ------------------------- | -------------- |
| %s            | String                | pff('Hello %s', 'world')  | 'Hello world'  |
| %d            | Floored number        | pff('My age is %d', 13.2) | 'My age is 13' |
| %%            | Percent               | pff('100%%s cool!')       | '100%s cool!'  |           

# License

MIT (c) 2014 Vsevolod Strukchinsky (floatdrop@gmail.com)

[npm-url]: https://npmjs.org/package/pff
[npm-image]: http://img.shields.io/npm/v/pff.svg

[travis-url]: https://travis-ci.org/floatdrop/pff
[travis-image]: http://img.shields.io/travis/floatdrop/pff.svg
