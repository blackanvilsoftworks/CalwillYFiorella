export default class SocialMediaButton {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    getSocialMediaButton() {
        return this.generateButton();
    }

    generateButton () {
        return `
            <div class="col-12 col-sm-6 mb-3">
                <button type="button" class="btn btn-outline-${this.color} w-100" id="${this.name}-btn">
                    <i class="bi bi-${this.name}"></i> ${this.name.charAt(0).toUpperCase() + this.name.slice(1)}
                </button>
            </div>
        `;
    }
}