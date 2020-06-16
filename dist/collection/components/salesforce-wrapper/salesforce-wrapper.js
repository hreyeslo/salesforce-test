import { Component, Host, h } from '@stencil/core';
export class SalesforceWrapper {
    render() {
        return (h(Host, null,
            h("div", { class: "card" },
                h("div", { class: "title" },
                    h("slot", { name: "title" })),
                h("div", { class: "body" },
                    h("slot", null)),
                h("div", { class: "footer" },
                    h("slot", { name: "footer" })))));
    }
    static get is() { return "salesforce-wrapper"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["salesforce-wrapper.css"]
    }; }
    static get styleUrls() { return {
        "$": ["salesforce-wrapper.css"]
    }; }
}
