import { arrPayMethods } from '../utils/arrays.js';
import { createTitle }   from '../utils/createTitle.js';

export default class PayMethod {
    constructor (title, icon) {
        this.title = title;
        this.icon = icon;
    }
    getPayMethods () {
        return this.generatePayMethods();
    }

    generatePayMethods () {
        return `
            <h2 class="mb-4">
                ${createTitle(this.title, this.icon)}
            </h2>
            <p>Aceptamos los siguientes métodos de pago:</p>
            ${this.createPayMethodsList()}
        `;
    }

    createPayMethodsList () {
        return `
            <ul class="list-unstyled">
                ${arrPayMethods.map(method => `
                    <li>
                        ${method}
                    </li>
                `).join('')}
            </ul>
        `;
    }
}