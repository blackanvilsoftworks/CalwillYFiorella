import { createTitle }      from '../utils/createTitle.js';
import { createFeatureBox } from '../utils/createFeatureBox.js';

export default class Feature {
    constructor(title, icon) {
        this.title = title;
        this.icon = icon;
    }

    getFeature() {
        return this.generateFeature();
    }

    generateFeature() {
        return `
            <div class="row justify-content-center">
                <div class="col-10">
                    <div class="row">
                        <h2 class="section-title text-center mb-4">
                            ${createTitle(this.title, this.icon)}
                        </h2>
                        ${createFeatureBox()}
                    </div>
                </div>
            </div>
        `;
    }
}