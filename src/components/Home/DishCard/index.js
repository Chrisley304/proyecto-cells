// src/components/MyComponent.js
import { LitElement, html, css } from "lit";
import { bootstrap } from "../../../styles/bootstrap-lit";
import defaultDishPhoto from "@/assets/img/dishes/dish.png";

class MyComponent extends LitElement {
    static styles = [bootstrap];

    static properties = {
        title: { type: String, atribute: true },
        description: { type: String, atribute: true },
        cta: { type: String },
        dishPhoto: { type: String, atribute: true },
    };

    constructor() {
        super();
        this.title = "Dish name";
        this.description = "Dish description";
        this.cta = "Delete";
        this.dishPhoto = defaultDishPhoto;
    }

    render() {
        return html`<div class="card">
            <!-- <img src="${this
                .dishPhoto}" class="card-img-top" alt="Dish" /> -->
            <div class="card-body">
                <div class="row">
                    <div class="col-4">
                        <img
                            src="${this.dishPhoto}"
                            class="card-img-top"
                            alt="Dish"
                        />
                    </div>
                    <div class="col-8 d-flex flex-column">
                        <h5 class="card-title">${this.title}</h5>
                        <p class="card-text">${this.description}</p>
                        <a href="#" class="btn btn-danger">${this.cta}</a>
                    </div>
                </div>
            </div>
        </div>`;
    }
}

customElements.define("dish-card", MyComponent);
