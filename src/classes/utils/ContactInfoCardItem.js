export default class ContactInfoCardItem {
    constructor (icon, type, value) {
        this.icon = icon;
        this.type = type;
        this.value = value;
    }

    getContactInfoCardItem() {
        return `
            <div class="row mb-2">
                <div class="col-1"><i class="${this.icon}"></i></div>
                <div class="col-11">${this.type}: ${this.value}</div>
            </div>
        `;
    }
}