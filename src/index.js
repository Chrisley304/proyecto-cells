// src/index.js
import { LitElement, html } from "lit";
import "@components/MyComponent.js";
import "@components/General/Navbar";

class MyApp extends LitElement {
    render() {
        return html`<div>
            <app-navbar></app-navbar>
            <my-component></my-component>
        </div>`;
    }
}

customElements.define("my-app", MyApp);
