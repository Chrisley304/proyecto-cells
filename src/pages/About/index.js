// src/index.js
import { LitElement, html } from "lit";
import "@components/General/Navbar";
import "@components/Home/DishesList";

class Home extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html`<div>
            <app-navbar></app-navbar>
            <h1>About</h1>
        </div>`;
    }
}

customElements.define("about-app", Home);
