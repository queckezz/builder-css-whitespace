
# builder-css-whitespace

[css whitespace](https://github.com/reworkcss/css-whitespace) plugin for [component builder2](https://github.com/component/builder2.js).

## Installation

```
$ npm install builder-css-whitespace
```

## Usage

```js
var build = require('component-builder2')
var whitespace = require('builder-css-whitespace')

build.styles(nodes, options)
  .use('styles', whitespace())
  .pipe(process.stdout)
```

Your files need to have a `.styl` extension so that the plugin recognizes that they are whitespaced.

```json
{
  "styles": [
    "index.styl",
    "typography.styl"
  ]
}
```

## Tests

```
make
```

## Licence

MIT
