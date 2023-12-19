// src/index.js
import { LitElement, html } from "lit";
import "@components/MyComponent.js";

class MyApp extends LitElement {
    render() {
        return html` <my-component></my-component> `;
    }
}

customElements.define("my-app", MyApp);
