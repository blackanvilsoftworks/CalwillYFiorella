import { arrFeatures } from '../arrays/features.js';

export const createFeatureBox = () => {
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