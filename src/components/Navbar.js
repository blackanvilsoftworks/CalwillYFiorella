import { globalInfo }    from '../utils/constants.js';
import { arrContainers } from '../utils/arrays.js';

export default class Navbar {
    constructor (id) {
        this.id = id;
    }

    getNavbar () {
        return this.generateNavbar();
    }

    generateNavbar () {
        return `
            <div class="container-fluid">
                <a class="navbar-brand" href="#${this.id}">
                    <img src="./assets/navbar-logo.png" alt="${globalInfo.name} Logo" height="40" class="d-inline-block align-text-top me-2">
                    <span class="ms-2 navbar-title">${globalInfo.name.toUpperCase()}</span>
                </a>
                <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-center ps-auto" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        ${this.createNavbarItems()}
                    </ul>
                </div>
            </div>`;
    }

    createNavbarItems () {
        return arrContainers.map(item => {
            if (item.navbar){
                return `
                    <li class="nav-item">
                        <a class="nav-link" href="#${item.id}">${item.navbar}</a>
                    </li>`;
            }
        }).join('');
    };
}