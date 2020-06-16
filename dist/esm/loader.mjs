import { a as patchEsm, b as bootstrapLazy } from './index-f168503a.js';

const defineCustomElements = (win, options) => patchEsm().then(() => {
  return bootstrapLazy([["salesforce-wrapper",[[1,"salesforce-wrapper"]]]], options);
});

export { defineCustomElements };
