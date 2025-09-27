import { createTitle } from '../utils/createTitle.js';
import { 
    globalInfo, 
    imagesPath 
} from '../utils/constants.js';

export default class AboutUs {
    constructor (title, icon) {
        this.title = title;
        this.icon = icon;
    }

    getAboutUs () {
        return this.generateAboutUs();
    }

    generateAboutUs () {
        return `
            <div class="row justify-content-center">
                <div class="col-10">
                    <div class="row">
                        <h2 class="col-12">
                            ${createTitle(this.title, this.icon)}
                        </h2>
                        <div class="col-12 col-md-5 col-lg-5 align-content-center">
                            <img src="${imagesPath}logo.jpg" class="img-fluid" alt="${globalInfo.name} Logo">
                        </div>
                        <div class="col-12 col-md-7 col-lg-7 px-5 align-self-center">
                            <p>En Calwill & Fiorella nos especializamos en la fabricación de calzado infantil de la más alta calidad, con diseños únicos y materiales sostenibles.</p>
                            <p>Calwill y Fiorella es una empresa dedicada a ofrecer productos de alta calidad con un enfoque en la sostenibilidad y el diseño innovador. Nuestro compromiso es brindar lo mejor a nuestros clientes, combinando tradición y modernidad.</p>
                            <p>Además, somos distribuidores de calzado para hombres y mujeres, ofreciendo una amplia variedad de estilos y tallas para toda la familia.</p>
                            <p>Nuestra misión es proporcionar calzado cómodo, durable y a la moda que satisfaga las necesidades de nuestros clientes.</p>    
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}