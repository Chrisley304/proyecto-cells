import { LitElement, html, css, nothing } from "lit";
import { bootstrap } from "../../../styles/bootstrap-lit";
import "@components/Home/DishCard";
import dummyDishes from "@/data/dishes.json";
import { map } from "lit/directives/map.js";
import { repeat } from "lit/directives/repeat.js";
import plusCircle from "@icons/plus-circle-fill.svg";

class DishesList extends LitElement {
    static styles = [bootstrap];

    static properties = {
        _dishes: { state: true },
        _showModal: { state: true },
    };

    constructor() {
        super();
        this._dishes = dummyDishes;
        this._showModal = false;
    }

    newRecipeHandler(e) {
        e.preventDefault();
        this._dishes = [
            ...this._dishes,
            {
                name: e.target.name.value,
                description: e.target.description.value,
            },
        ];
        this._showModal = !this._showModal;
    }

    deleteDishHandler(deletedIndex) {
        console.log("Deleting dish", deletedIndex);
        this._dishes = this._dishes.filter(
            (_, index) => index !== deletedIndex
        );
        this.requestUpdate();
    }

    render() {
        const modal = html`<div
            class="offcanvas offcanvas-start show"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
        >
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                    Add recipe
                </h5>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    @click=${() => (this._showModal = !this._showModal)}
                ></button>
            </div>
            <form
                name="new-recipe"
                class="offcanvas-body"
                @submit=${this.newRecipeHandler}
            >
                <label for="name" class="form-label">Recipe name</label>
                <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Recipe name here"
                />
                <label for="description" class="form-label mt-2"
                    >Recipe description</label
                >
                <textarea
                    class="form-control"
                    id="description"
                    name="description"
                    rows="3"
                    placeholder="Recipe description here"
                ></textarea>
                <button class="btn btn-primary mt-3" type="submit">
                    Add recipe
                </button>
            </form>
        </div>`;

        return html`<div>
            ${this._showModal ? modal : nothing}
            <div class="container mt-2">
                <div class="row g-3">
                    ${map(
                        this._dishes,
                        (dish, index) => html`<div
                            class="col-12 col-sm-6 col-lg-4"
                        >
                            <dish-card
                                title="${dish.name}"
                                description="${dish.description}"
                                id="${index}"
                                @delete-dish=${() =>
                                    this.deleteDishHandler(index)}
                            ></dish-card>
                        </div>`
                    )}
                </div>
                <div class="text-center mt-4 mb-4">
                    <img
                        src="${plusCircle}"
                        height="35"
                        alt="Add dish"
                        class="text-primary"
                        @click=${() => (this._showModal = !this._showModal)}
                    />
                </div>
            </div>
        </div>`;
    }
}

customElements.define("dishes-list", DishesList);
