'use strict';

const index = require('./index-ea20d3d5.js');

index.patchBrowser().then(options => {
  return index.bootstrapLazy([["salesforce-wrapper.cjs",[[1,"salesforce-wrapper"]]]], options);
});
