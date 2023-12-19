// src/components/MyComponent.js
import { LitElement, html, css } from "lit";
import { bootstrap } from "../../../styles/bootstrap-lit";
import "@components/Home/DishCard";
import dummyDishes from "@/data/dishes.json";

class MyComponent extends LitElement {
    static styles = [bootstrap];

    render() {
        console.log(dummyDishes);
        return html` <div class="container mt-2">
            <div class="row g-3">
                ${dummyDishes.map(
                    (dish) => html`<div class="col-12 col-sm-6 col-lg-4">
                        <dish-card
                            title="${dish.name}"
                            description="${dish.description}"
                        ></dish-card>
                    </div>`
                )}
            </div>
            <div></div>
        </div>`;
    }
}

customElements.define("dishes-list", MyComponent);
