//import './testConnection';

const contacForm = document.getElementById('contact-form');
const toWhatsappBtn = document.getElementById('whatsapp-btn');
const toFacebookBtn = document.getElementById('facebook-btn');
const formRow = document.getElementById('form-row');
const nameRegex = /^[A-Za-z\s]+$/;
const phoneNumberRegex = /^[0-9]{10}$/;
const messageRegex = /^[A-Za-z0-9\-\s]/g; // todo Que esto valide que no se metan símbolos extraños. Que se puedan poner , y .

contacForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputName = document.getElementById('name');
    const inputPhoneNumber = document.getElementById('phone-number');
    const inputMessage = document.getElementById('message');

    const cleanedName = nameValidation(inputName);
    const cleanedPhoneNumber = phoneNumberValidation(inputPhoneNumber);
    const cleanedMessage = messageValidation(inputMessage);

    if (!cleanedName || !cleanedPhoneNumber || !cleanedMessage) {
        return;
    }

    whatsappLinkPhoneNumber = `https://wa.me/549${cleanedPhoneNumber}`;
    
    inputPhoneNumber.value = whatsappLinkPhoneNumber;

    this.submit(); // Esto activa FormSubmit
    contacForm.reset();
    alert('Formulario enviado con éxito.');
    
    /*formRow.innerHTML += `
        <div class="alert alert-success mt-3" role="alert">
    `;*/

    
});

const nameValidation = (inputName) => {
    const cleanedName = inputName.value.trim();
    if (!nameRegex.test(cleanedName)) {
        alert('El nombre solo puede contener letras y espacios.');
        return false;
    }
    return cleanedName.toUpperCase(); // Convertir a mayúsculas
};

const phoneNumberValidation = (inputPhoneNumber) => {
    const cleanedPhoneNumber = inputPhoneNumber.value.trim().replace(/\D/g, '');
    if (!phoneNumberRegex.test(cleanedPhoneNumber)) {
        alert('El número de teléfono no puede contener espacios ni guines, y debe tener 10 caracteres.');
        return false;
    }
    
    return cleanedPhoneNumber; 
};

const messageValidation = (inputMessage) => {
    const cleanedMessage = inputMessage.value.trim();
    if (!messageRegex.test(cleanedMessage)) {
        alert('El mensaje no puede contener caracteres especiales.');
        return false;
    }
    return cleanedMessage; 
};


// Footer Container Buttons

toFacebookBtn.addEventListener('click', () => {
    const facebookURL = 'https://www.facebook.com/share/16FkGbSYi4/?mibextid=wwXIfr';
    window.open(facebookURL, '_blank');
});

toWhatsappBtn.addEventListener('click', () => {
    const whatsappName = "NOMBRE_AQUI"; // Reemplaza con el nombre que desees
    const whatsappMessage = "MENSAJE_AQUI"; // Reemplaza con el mensaje que desees
    const whatsappNumber = '5491159590586';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=Hola,%20mi%20nombre%20es%20${encodeURIComponent(whatsappName)}.%20Quería%20consultar%20por%20${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
});




// MODULARIZACIÓN

// Constantes
const globalName = 'calwill & fiorella';
const imagesPath = './src/assets/images/';

// DOM
const navbarContainer = document.getElementById('navbar-container');
const heroSection = document.getElementById('hero-section')

// Arrays
const arrContactInfo = [
    {
        type: 'phone',
        info: '+54 9 11-5959-0586'
    },
    {
        type: 'email',
        info: 'calwillyfiorella@gmail.com'
    },
    {
        type: 'horario',
        info: 'Lunes a S+abado de 9 a 18 hs'
    }
];

const arrContainers =[
    {
        id: 'navbar-container',
        navbar: '',
        title: '',
        icon: '',
        function: fillNavbar
    },
    {
        id: 'hero-section',
        navbar: 'Inicio',
        title: '',
        icon: '',
        function: fillHeroSection
    },
    {
        id: 'about-us-container',
        navbar: 'Sobre Nosotros',
        title: 'Sobre Nosotros',
        icon: 'bi bi-balloon-heart'
    },
    {
        id: 'features-container',
        navbar: 'Características',
        title: '¿Por Qué Elegirnos?',
        icon: 'bi bi-person-raised-hand"'
    },
    {
        id: 'products-container',
        navbar: 'Productos',
        title: 'Nuestros Productos',
        icon: 'bi bi-cart'
    },
    {
        id: 'shipping-container',
        navbar: 'Envíos',
        title: 'Opciones de Envío',
        icon: 'bi bi-rocket-takeoff'
    },
    {
        id: 'pay-methods-container',
        navbar: 'Pagos',
        title: 'Métodos de Pago',
        icon: 'bi bi-cash-coin'
    },
    {
        id: 'contact-form-container',
        navbar: 'Contacto',
        title: 'Contáctanos',
        icon: 'bi bi-mailbox-flag'
    },
    {
        id: 'footer-container',
        navbar: '',
        title: '',
        icon: ''
    }
];

const arrFeatures = [
    {
        icon: 'bi bi-star-fill',
        title: 'Calidad Premium',
        description: 'Utilizamos materiales de primera calidad para garantizar la durabilidad y comodidad de nuestro calzado.'
    },
    {
        icon: 'bi bi-tree-fill',
        title: 'Materiales Sustentables',
        description: 'Nos preocupamos por el medio ambiente utilizando materiales ecológicos y procesos sostenibles.'
    },
    {
        icon: 'bi bi-heart-fill',
        title: 'Hecho con Amor',
        description: 'Cada par de zapatos es fabricado con dedicación y atención a los detalles.'
    }
];

const arrSocialMedia = [
    {
        name: 'facebook',
        icon: 'bi bi-facebook',
        url: 'https://www.facebook.com/share/16FkGbSYi4/?mibextid=wwXIfr'
    },
    {
        name: 'whatsapp',
        icon: 'bi bi-whatsapp',
        url: `https://wa.me/${arrContactInfo[0].info.replace(/\D/g, '')}` // Quita todo lo que no sea número y que busque el array por tipo y no porindex

    }
];

// Funciones

const fillBody = () => {
    fillNavbar(arrContainers[0]);
    fillHeroSection(arrContainers[1]);
    fillAboutUsContainer(arrContainers[2]);
    fillFeaturesContainer(arrContainers[3]);
    //fillProductsContainer();
    //fillShippingContainer();
    //fillPayMethodsContainer();
    //fillContactFormContainer();
    //fillFooterContainer();

    
};

//fillBody();

const fillNavbar = (obj) => {
    const container = document.getElementById('navbar-container');    
    container.innerHTML = `
        <div class="container-fluid">
            <a class="navbar-brand" href="#${obj.id}">
                <img src="./assets/navbar-logo.png" alt="${globalName} Logo" height="40" class="d-inline-block align-text-top me-2">
                <span class="ms-2 navbar-title">${toUpperCase(globalName)}</span>
            </a>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-center ps-auto" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    ${createNavbarItems()}
                </ul>
            </div>
        </div>
    `;
}; 

const createNavbarItems = () => {
    return arrContainers.map(item => {
        if (item.id === 'hero-container') {
            return `
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#${item.id}">${item.navbar}</a>
                </li>
            `;
        } else {
            return `
                <li class="nav-item">
                    <a class="nav-link" href="#${item.id}">${item.navbar}</a>
                </li>
            `;
        }
    }).join('');
};

const fillHeroSection = (obj) => {    
    const container = document.getElementById(obj);
    container.innerHTML = `
        <div class="container">
            <h1 class="display-4 fw-bold mb-4">Calzado de Calidad para Toda la Familia</h1>
            <p class="lead mb-4 fw-semibold">Fabricamos calzado infantil con los mejores materiales y distribuimos calzado para adultos de las mejores marcas.</p>
            <a href="#products-container" class="btn btn-primary btn-lg">Ver Productos</a>
        </div>
    `;
};

const fillAboutUsContainer = (obj) => {
    const container = document.getElementById(obj.id);
    container.innerHTML = `
        <div class="row justify-content-center">
            <div class="col-10">
                <div class="row">
                    <h2 class="col-12">
                        ${createTitles(obj.title, obj.icon)}
                    </h2>
                    <div class="col-12 col-md-5 col-lg-5 align-content-center">
                        <img src="${imagesPath}logo.jpg" class="img-fluid" alt="${globalName} Logo">
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
};  

const fillFeaturesContainer = (obj) => {
    const container = document.getElementById(obj.id);
    container.innerHTML = `
        <div class="row justify-content-center">
            <div class="col-10">
                <div class="row">
                    <h2 class="section-title text-center mb-4">
                        ${createTitles(obj.title, obj.icon)}
                    </h2>
                    ${createFeatureBox()}                  
                </div>
            </div>
        </div>
    `;
};

const createFeatureBox = (icon, title, description) => {
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







const fillProductsContainer = (obj) => {};





const fillShippingContainer = (obj) => {
    const container = document.getElementById(obj.id);
    container.innerHTML = `
        
    `;
};





const fillPayMethodsContainer = (obj) => {};
const fillContactFormContainer = (obj) => {};
const fillFooterContainer = (obj) => {};

const  createTitles = (title, icon) => {
    return `
        <span class="titles">
                ${title} 
                <i class="${icon}"></i>
        </span>
    `;
}

















