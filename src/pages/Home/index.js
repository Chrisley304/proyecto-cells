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
            <dishes-list></dishes-list>
        </div>`;
    }
}

customElements.define("home-app", Home);
