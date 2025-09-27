import { arrFeatures } from '../utils/arrays.js';
import { createTitle } from '../utils/createTitle.js';

export default class Feature {
    constructor (title, icon) {
        this.title = title;
        this.icon = icon;
    }

    getFeature () {
        return this.generateFeature();
    }

    generateFeature () {
        return `
            <div class="row justify-content-center">
                <div class="col-10">
                    <div class="row">
                        <h2 class="section-title text-center mb-4">
                            ${createTitle(this.title, this.icon)}
                        </h2>
                        ${this.createFeatureBox()}
                    </div>
                </div>
            </div>
        `;
    }

    createFeatureBox () {
        return arrFeatures.map(feature => `
            <div class="col-12 col-md-4 mb-4 px-3">
                <div class="feature-box">
                    <div class="feature-icon">
                        <i class="${feature.icon}"></i>
                    </div>
                    <h3>${feature.title}</h3>
                    <p>${feature.description}</p>
                </div>
            </div>
        `).join('');
    };
}