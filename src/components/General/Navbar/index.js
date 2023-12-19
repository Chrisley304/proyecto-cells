// src/components/MyComponent.js
import { LitElement, html, css } from "lit";
import { bootstrap } from "../../../styles/bootstrap-lit";
// import "bootstrap/dist/js/bootstrap";

class MyComponent extends LitElement {
    static styles = [bootstrap];

    render() {
        return html` <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Chris Food</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`;
    }
}

customElements.define("app-navbar", MyComponent);
