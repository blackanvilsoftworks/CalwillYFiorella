import { arrShippingOptions } from '../utils/arrays.js';
import { createTitle }        from '../utils/createTitle.js';

export default class Shipping {
    constructor (title, icon) {
        this.title = title;
        this.icon = icon;
    }

    getShipping () {
        return this.generateShippingContainer();
    }
    
    generateShippingContainer () {
        return `
            <div class="row justify-content-center"> <!-- Centramos la fila -->
                <div class="col-12 col-md-10"> <!-- Limitamos el ancho en pantallas grandes -->
                    <div class="row mx-3 mx-sm-5 px-3 ">
                        <div class="col-md-12">
                            <h2 class="mb-4">
                                ${createTitle(this.title, this.icon)}
                            </h2>
                        </div>        
                        <div class="col-12 col-md-4 my-3 my-md-0 px-3">
                            ${this.createShippingOption(0)}
                        </div>
                        <div class="col-12 col-md-4 mb-3 my-md-0 px-3">
                            ${this.createShippingOption(1)}
                        </div>
                        <div class="col-12 col-md-4 my-md-0 px-3">
                            ${this.createShippingOption(2)}
                        </div>
                        <div class="col-12 col-md-8 p-3 shipping-rules-container rounded-3">
                            ${this.createShippingOption(3)}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    createShippingOption (i) {
        return `
            <h4 class="subtitles">${arrShippingOptions[i].subtitle}</h4>
            ${arrShippingOptions[i].description.map(desc => `
                <p>${desc}</p>
            `).join('')}
        `;
    };
}