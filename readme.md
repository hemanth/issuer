# issuer [![Build Status](https://travis-ci.org/hemanth/issuer.svg?branch=master)](https://travis-ci.org/hemanth/issuer)

> Reduces overhead in creating issues.


## Install

```
$ npm install --save issuer
```


## Usage

```js
const issuer = require('issuer');

issuer('node').then(data => console.log(data));
/*

Data would looks like:

{ 
  OS: 'Darwin',
  node: 'v5.3.0',
  path: '/Users/Hemanth/bin',
  npm: '3.3.12' 
}
*/
```


## API

### issuer(lang)

#### lang

Type: `string`

Specific language on which you need to info.


## CLI

```
$ npm install --global issuer
```

```
$ issuer --help

  Usage
    issuer <lang>

  Examples
    $ issuer node

    * os : `darwin`
    * version : `v5.3.0`
    * path : `/Users/Hemanth/bin`
    * nvm : `3.3.12`
```


## License

MIT © [Hemanth.HM](http://h3manth.com)
