// src/index.js
import { LitElement, html } from "lit";
import "@components/General/Navbar";
import "@components/Home/DishesList";

class NotFound extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html`<div>
            <h1>Error 404</h1>
            <p>Page not found</p>
            <a href="/">Go to home</a>
        </div>`;
    }
}

customElements.define("not-found-app", NotFound);
