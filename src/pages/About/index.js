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
            <div class="container">
                <h3 class="mt-3">About Food Ninja</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ducimus, porro voluptatum illum veniam eaque sunt sit labore
                    provident eligendi! Voluptate amet suscipit inventore unde
                    maxime atque impedit officia nobis laboriosam!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam voluptatibus omnis, ea doloremque exercitationem id
                    necessitatibus. Voluptatem officiis cupiditate commodi
                    totam, hic laborum est ducimus amet iure, non dignissimos
                    illo.
                </p>
            </div>
        </div>`;
    }
}

customElements.define("about-app", Home);
