import { imagesPath }  from '../utils/constants.js';
import { arrProducts } from '../utils/arrays.js';
import { createTitle } from '../utils/createTitle.js';

export default class Product {
    constructor (title, icon) {
        this.title = title;
        this.icon = icon;
    }

    getProduct () {
        return this.generateProductContainer();
    }

    generateProductContainer () {
        return `
            <div class="row justify-content-center">
                <div class="col-10 col-lg-12 px-lg-5">
                    <div class="row">
                        <h2 class="text-center">
                            ${createTitle(this.title, this.icon)}
                        </h2>
                        ${this.createProductsNav()}
                        <div class="tab-content" id="productsTabContent">
                            ${this.createProductsContainers()}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    createProductsNav () {
        return `
            <ul class="nav nav-pills justify-content-center mb-4" id="productsTab" role="tablist">
                ${arrProducts.map((product, i) => {
                    return `
                        <li class="nav-item" role="presentation">
                            <button class="nav-link${i === 0 ? " active" : ""}" id="${product.id}-tab" data-bs-toggle="pill" data-bs-target="#${product.id}" type="button" role="tab" aria-controls="${product.id}" aria-selected="${i === 0 ? "true" : "false"}">${product.title}</button>
                        </li>
                    `;
                }).join('')}
            </ul>
        `;
    };

    createProductsContainers = () => {
        return arrProducts.map((product, i) => {
            return `
                <div class="tab-pane fade show${i === 0 ? " active" : ""}" id="${product.id}" role="tabpanel" aria-labelledby="${product.id}-tab">
                    <div class="row">
                        ${this.createCarousel(product, i)}
                    </div>
                </div>
            `;
        }).join('');
    };

    createCarousel (product, i) {
        return product.cards.map((card, j) => {
            const id = `carousel-${product.id}-product${j+1}`;
            return `
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card product-card">
                        <div id="${id}" class="carousel slide" data-bs-ride="carousel">
                            ${this.createCarouselImages(product, card, j)}
                            ${this.createCarouselButtons(id, 'prev')}
                            ${this.createCarouselButtons(id, 'next')}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${card.title}</h5>
                            <p class="card-text">${card.description}</p>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    };

    createCarouselImages = (product, card, j) => {
        return  `
            <div class="carousel-inner">
                ${card.carouselImages.map((_, k) => {
                    return `
                        <div class="carousel-item${k === 0 ? ' active' : ''}">
                            <img src="${imagesPath}productsContainer/${product.id}/product${j+1}_img${k+1}.jpg" class="d-block w-100" alt="Imagen ${k+1}" />
                        </div>
                    `
                }).join('')} 
            </div>
        `;
    };

    createCarouselButtons (id, prevOrNext) {
        return `
            <button class="carousel-control-${prevOrNext}" type="button" data-bs-target="#${id}" data-bs-slide="${prevOrNext}">
                <span class="carousel-control-${prevOrNext}-icon" aria-hidden="true"></span>
                <span class="visually-hidden">${prevOrNext === 'next' ? 'Next' : 'Previous'}</span>
            </button>
        `;
    };
}
