// src/index.js
import { LitElement, html } from "lit";
import "@components/General/Navbar";
import "@components/Home/DishesList";

class Contact extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html`<div>
            <app-navbar></app-navbar>
            <div class="container">
                <h3 class=" mt-3">Contact Us</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ducimus, porro voluptatum illum veniam eaque sunt sit labore
                    provident eligendi! Voluptate amet suscipit inventore unde
                    maxime atque impedit officia nobis laboriosam!
                </p>
                <h6>Find us at:</h6>
                <ul>
                    <li>123 Spicy Noodle Road</li>
                    <li>Manchester, UK</li>
                </ul>
            </div>
        </div>`;
    }
}

customElements.define("contact-app", Contact);
