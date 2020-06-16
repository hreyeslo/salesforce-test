import { r as registerInstance, h, H as Host } from './index-f168503a.js';

const salesforceWrapperCss = ":host{display:block}.card{border-radius:4px;background-color:#fff;-webkit-box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:344px;padding:16px}.title{padding:16px 0;font-size:22px;font-weight:bold}.body{padding:20px 0}.footer{border-top:1px grey solid;padding:16px;margin:20px -16px 0}";

const SalesforceWrapper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("div", { class: "card" }, h("div", { class: "title" }, h("slot", { name: "title" })), h("div", { class: "body" }, h("slot", null)), h("div", { class: "footer" }, h("slot", { name: "footer" })))));
    }
};
SalesforceWrapper.style = salesforceWrapperCss;

export { SalesforceWrapper as salesforce_wrapper };
