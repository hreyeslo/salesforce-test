'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ea20d3d5.js');

const defineCustomElements = (win, options) => index.patchEsm().then(() => {
  return index.bootstrapLazy([["salesforce-wrapper.cjs",[[1,"salesforce-wrapper"]]]], options);
});

exports.defineCustomElements = defineCustomElements;
