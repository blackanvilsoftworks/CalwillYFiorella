export default class PayMethodItem {
    constructor (arrPayMethods) {
        this.arrPayMethods = arrPayMethods;
    }

    generateList() {
        return `
            <ul class="list-unstyled">
                ${this.arrPayMethods.map(method => `
                    <li>
                        ${method}
                    </li>`).join('')}
            </ul>
        `;
    }
}