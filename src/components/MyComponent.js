// src/components/MyComponent.js
import { LitElement, html, css } from "lit";

class MyComponent extends LitElement {
    static styles = css`
        /* Your component styles go here */
    `;

    render() {
        return html` <p>Hello from MyComponent</p>`;
    }
}

customElements.define("my-component", MyComponent);
