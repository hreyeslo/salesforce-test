'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ea20d3d5.js');

const salesforceWrapperCss = ":host{display:block}.card{border-radius:4px;background-color:#fff;-webkit-box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:344px;padding:16px}.title{padding:16px 0;font-size:22px;font-weight:bold}.body{padding:20px 0}.footer{border-top:1px grey solid;padding:16px;margin:20px -16px 0}";

const SalesforceWrapper = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { class: "card" }, index.h("div", { class: "title" }, index.h("slot", { name: "title" })), index.h("div", { class: "body" }, index.h("slot", null)), index.h("div", { class: "footer" }, index.h("slot", { name: "footer" })))));
    }
};
SalesforceWrapper.style = salesforceWrapperCss;

exports.salesforce_wrapper = SalesforceWrapper;
