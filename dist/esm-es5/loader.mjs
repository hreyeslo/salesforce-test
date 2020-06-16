import { a as patchEsm, b as bootstrapLazy } from './index-f168503a.js';
var defineCustomElements = function (win, options) { return patchEsm().then(function () {
    return bootstrapLazy([["salesforce-wrapper", [[1, "salesforce-wrapper"]]]], options);
}); };
export { defineCustomElements };
