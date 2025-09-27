import { arrSocialMedia } from '../utils/arrays.js';

export default class Footer {
    constructor () {
        // No properties needed for now
    }
    
    getFooter () {
        return this.generateFooter();
    }

    generateFooter () {
        return `    
            <div class="container pt-0">
                <div class="row justify-content-center"> <!-- Centramos la fila -->
                    <div class="col-12 col-md-8"> <!-- Limitamos el ancho en pantallas grandes -->
                        <div class="row">
                            ${this.createSocialMediaButton()}
                        </div>                    
                        <hr>                    
                        <div class="row">
                            <div class="col-12">
                                <h5>Calwill & Fiorella</h5>
                                <p>Fabricantes de calzado infantil y distribuidores de calzado para adultos. Calidad, comodidad y estilo para toda la familia.</p>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        `;
    }

    createSocialMediaButton () {
        return `
            ${arrSocialMedia.map(media => {
                return `
                    <div class="col-12 col-sm-6 mb-3">
                        <button type="button" class="btn btn-outline-${media.color} w-100" id="${media.name}-btn">
                            <i class="bi bi-${media.name}"></i> ${media.name.charAt(0).toUpperCase() + media.name.slice(1)}
                        </button>
                    </div>
                `;
            }).join('')}
        `;
    }
    
}