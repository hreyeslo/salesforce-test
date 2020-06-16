import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'salesforce-wrapper',
  styleUrl: 'salesforce-wrapper.css',
  shadow: true,
})
export class SalesforceWrapper implements ComponentInterface {

  render() {
    return (
      <Host>
        <div class="card">
          <div class="title">
            <slot name="title"></slot>
          </div>
          <div class="body">
            <slot></slot>
          </div>
          <div class="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </Host>
    );
  }

}
