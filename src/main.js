//import './testConnection';


const contacForm = document.getElementById('contact-form');
const toWhatsappBtn = document.getElementById('whatsapp-btn');
const toFacebookBtn = document.getElementById('facebook-btn');
const formRow = document.getElementById('form-row');
const nameRegex = /^[A-Za-z\s]+$/;
const phoneNumberRegex = /^[0-9]{10}$/;
const messageRegex = /^[A-Za-z0-9\-\s]/g; // todo Que esto valide que no se metan símbolos extraños. Que se puedan poner , y .


const arrProducts = [
    {
        id:'children',
        title: 'Calzado Infantil',
        cards: [
            {
                title: 'Zapatos para Niño',
                description: 'Zapatos cómodos y resistentes para los más pequeños, disponibles en varios colores.',
                carouselImages: [1, 2, 3]
            },
            {
                title: 'Zapatos para Niña',
                description: 'Bonitos y cómodos zapatos para niñas, perfectos para ocasiones especiales y uso diario.',
                carouselImages: [1, 2, 3]
            },
            {
                title: 'Zapatos para Bebé',
                description: 'Suaves y flexibles zapatos para bebés, diseñados para no molestar sus pies en desarrollo.',
                carouselImages: [1, 2, 3]
            },
            {
                title: 'Zapatos para Niño',
                description: 'Bonitos y cómodos zapatos para niñas, perfectos para ocasiones especiales y uso diario.',
                carouselImages: [1, 2, 3]
            }
        ]
    },
    {
        id:'women',
        title: 'Calzado para Mujeres',
        cards: [
            {
                title: 'Zapatos para Mujer',
                description: 'Zapatos cómodos y resistentes para los más pequeños, disponibles en varios colores.',
                carouselImages: [1, 2, 3]
            },
            {
                title: 'apatos para Mujer',
                description: 'Bonitos y cómodos zapatos para niñas, perfectos para ocasiones especiales y uso diario.',
                carouselImages: [1, 2, 3]
            },
            {
                title: 'Zapatos para Mujer',
                description: 'Suaves y flexibles zapatos para bebés, diseñados para no molestar sus pies en desarrollo.',
                carouselImages: [1, 2, 3]
            },
            {
                title: 'Zapatos para Mujer',
                description: 'Bonitos y cómodos zapatos para niñas, perfectos para ocasiones especiales y uso diario.',
                carouselImages: [1, 2, 3]
            }
        ]
    },
    {
        id:'men',
        title: 'Calzado para Hombres',
        cards: [
            {
                title: 'Zapatos para Hombres',
                description: 'Zapatos cómodos y resistentes para los más pequeños, disponibles en varios colores.',
                carouselImages: [1, 2, 3]
            },
            {
                title: 'apatos para Hombres',
                description: 'Bonitos y cómodos zapatos para niñas, perfectos para ocasiones especiales y uso diario.',
                carouselImages: [1, 2, 3]
            },
            {
                title: 'Zapatos para Hombres',
                description: 'Suaves y flexibles zapatos para bebés, diseñados para no molestar sus pies en desarrollo.',
                carouselImages: [1, 2, 3]
            },
            {
                title: 'Zapatos para Hombres',
                description: 'Bonitos y cómodos zapatos para niñas, perfectos para ocasiones especiales y uso diario.',
                carouselImages: [1, 2, 3]
            }
        ]
    }
];






// MODULARIZACIÓN

// Constantes
const globalName = 'calwill & fiorella';
const imagesPath = './src/assets/images/';

// DOM
const navbarContainer = document.getElementById('navbar-container');
const heroSection = document.getElementById('hero-section')

// Arrays
const arrInfoCardContent = [
    {
        type: 'Email',
        value: 'calwillyfiorella@gmail.com',
        icon: 'bi bi-envelope-fill'
    },
    {
        type: 'Teléfono',
        value: '+54 9 11-5959-0586',
        icon: 'bi bi-telephone-fill'
    },
    {
        type: 'Horario',
        value: 'Lunes a Sábado de 09:00 a 18:00',
        icon: 'bi bi-clock-fill'
    }
];

const createNavbarItems = () => {
    return arrContainers.map(item => {
        if (item.navbar){
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
        }
    }).join('');
};

const fillNavbar = (obj) => {
    const container = document.getElementById(obj.id);    
    container.innerHTML = `
        <div class="container-fluid">
            <a class="navbar-brand" href="#${obj.id}">
                <img src="./assets/navbar-logo.png" alt="${globalName} Logo" height="40" class="d-inline-block align-text-top me-2">
                <span class="ms-2 navbar-title">${globalName.toUpperCase()}</span>
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

const fillHeroSection = (obj) => {    
    const container = document.getElementById(obj.id);
    container.innerHTML = `
        <div class="container">
            <h1 class="display-4 fw-bold mb-4">Calzado de Calidad para Toda la Familia</h1>
            <p class="lead mb-4 fw-semibold">Fabricamos calzado infantil con los mejores materiales y distribuimos calzado para adultos de las mejores marcas.</p>
            <a href="#products-container" class="btn btn-primary btn-lg">Ver Productos</a>
        </div>
    `;
};

const createTitles = (title, icon) => {
    return `
        <span class="titles">
            ${title}
            <i class="icon"><i>
        </span>
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

const createFeatureBox = () => {
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

const fillProductsContainer = (obj) => {
    const container = document.getElementById(obj.id);
    container.innerHTML = `
        <div class="row justify-content-center">
            <div class="col-10 col-lg-12 px-lg-5">
                <div class="row">
                    <h2 class="text-center">
                        ${createTitles(obj.title, obj.icon)}
                    </h2>
                    ${createProductsNav()}
                    <div class="tab-content" id="productsTabContent">
                        ${createProductsContainers()}
                    </div>
                </div>
            </div>
        </div>
    `;
};

const createProductsContainers = () => {
    let html = '';
    for (let i = 0; i < arrProducts.length; i++) {
        if (i === 0) {
            html += `
                <div class="tab-pane fade show active" id="${arrProducts[i].id}" role="tabpanel" aria-labelledby="${arrProducts[i].id}-tab">
            `;
        } else {
            html += `
                <div class="tab-pane fade show" id="${arrProducts[i].id}" role="tabpanel" aria-labelledby="${arrProducts[i].id}-tab">
            `;
        }
        html += `
            <div class="row">
                ${createCarousel(i)}
            </div>
        </div>`;
    }
    return html;
};

const createCarousel = (i) => {
    let html = '';
    for (let j = 0; j < arrProducts[i].cards.length; j++) {
        let id = `carousel-${arrProducts[i].id}-product${j+1}`;
        html += `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card product-card">
                    <div id="${id}" class="carousel slide" data-bs-ride="carousel">
                        ${createCarouselImages(i, j)}
                        ${createCarouselButtons(id, 'prev')}
                        ${createCarouselButtons(id, 'next')}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${arrProducts[i].cards[j].title}</h5>
                        <p class="card-text">${arrProducts[i].cards[j].description}</p>
                    </div>
                </div>
            </div>        
        `;
    }
    return html;
};

const createCarouselImages = (i, j) => {
    let html = '';
    for (let k = 0; k < arrProducts[i].cards[j].carouselImages.length; k++){
        html = `<div class="carousel-inner">`;
        if (k === 0) {
            html += `<div class="carousel-item active">`;
        } else {
            html += `<div class="carousel-item">`;
        }
        html += `
                <img src="./assets/images/productscontainer/children/product1_img1.jpg" class="d-block w-100" alt="Imagen 1">
            </div>
        </div>`;
    } 
        //<img src="${imagesPath}productsContainer/${arrProducts[i].id}/product${j+1}_img${k+1}.jpg" class="d-block w-100" alt="Imagen ${k+1}">
    return html;
};

const createCarouselButtons = (id, prevOrNext) => {
    return `
        <button class="carousel-control-${prevOrNext}" type="button" data-bs-target="#${id}" data-bs-slide="${prevOrNext}">
            <span class="carousel-control-${prevOrNext}-icon" aria-hidden="true"></span>
            <span class="visually-hidden">${prevOrNext === 'next' ? 'Next' : 'Previous'}</span>
        </button>
    `;
};



const fillFooterContainer = (obj) => {
    const container = document.getElementById(obj.id);
    container.innerHTML = `    
        <div class="container pt-0">
           <div class="row justify-content-center"> <!-- Centramos la fila -->
               <div class="col-12 col-md-8"> <!-- Limitamos el ancho en pantallas grandes -->
                   <div class="row">
                       ${createSocialMediaButton()}
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
};



const fillShippingContainer = (obj) => {
    const container = document.getElementById(obj.id);
    container.innerHTML = `
        <div class="row justify-content-center"> <!-- Centramos la fila -->
            <div class="col-12 col-md-10"> <!-- Limitamos el ancho en pantallas grandes -->
                <div class="row mx-3 mx-sm-5 px-3 ">
                    <div class="col-md-12">
                        <h2 class="mb-4">
                            ${createTitles(obj.title, obj.icon)}
                        </h2>
                    </div>        
                    <div class="col-12 col-md-4 my-3 my-md-0 px-3">
                        ${createShippingOption(0)}
                    </div>
                    <div class="col-12 col-md-4 mb-3 my-md-0 px-3">
                        ${createShippingOption(1)}
                    </div>
                    <div class="col-12 col-md-4 my-md-0 px-3">
                        ${createShippingOption(2)}
                    </div>
                    <div class="col-12 col-md-8 p-3 shipping-rules-container rounded-3">
                        ${createShippingOption(3)}
                    </div>
                </div>
            </div>
        </div>
    `;
};

const fillPayMethodsContainer = (obj) => {
    const container = document.getElementById(obj.id);
    container.innerHTML = `
        <h2 class="mb-4">
            ${createTitles(obj.title, obj.icon)}
        </h2>
        <p>Aceptamos los siguientes métodos de pago:</p>
        ${createPayMethodsList()}
    `;
};

const fillContactFormContainer = (obj) => {
    const container = document.getElementById(obj.id);
    container.innerHTML = `
        <h2 class="text-center mb-4">
            ${createTitles(obj.title, obj.icon)}
        </h2>
        <div class="row" id="form-row">
            ${createContactForm()}
        </div>
        <div class="row mt-3">
            ${createContactInfoCard()}
        </div>
    `;
};



















const arrContainers =[
    {
        id: 'navbar-container',
        navbar: null,
        title: null,
        icon: null,
        function: fillNavbar
    },
    {
        id: 'hero-section',
        navbar: 'Inicio',
        title: null,
        icon: null,
        function: fillHeroSection
    },
    {
        id: 'about-us-container',
        navbar: 'Sobre Nosotros',
        title: 'Sobre Nosotros',
        icon: 'bi bi-balloon-heart',
        function: fillAboutUsContainer
    },
    {
        id: 'features-container',
        navbar: 'Características',
        title: '¿Por Qué Elegirnos?',
        icon: 'bi bi-person-raised-hand"',
        function: fillFeaturesContainer
    },
    {
        id: 'products-container',
        navbar: 'Productos',
        title: 'Nuestros Productos',
        icon: 'bi bi-cart',
        function: fillProductsContainer
    },
    {
        id: 'shipping-container',
        navbar: 'Envíos',
        title: 'Opciones de Envío',
        icon: 'bi bi-rocket-takeoff',
        function: fillShippingContainer
    },
    {
        id: 'pay-methods-container',
        navbar: 'Pagos',
        title: 'Métodos de Pago',
        icon: 'bi bi-cash-coin',
        function: fillPayMethodsContainer
    },
    {
        id: 'contact-form-container',
        navbar: 'Contacto',
        title: 'Contáctanos',
        icon: 'bi bi-mailbox-flag',
        function: fillContactFormContainer
    },
    {
        id: 'footer-container',
        navbar: null,
        title: null,
        icon: null,
        function: fillFooterContainer
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

const arrShippingOptions = [
    {
        subtitle: 'Retiros en Estación Llavallol',
        description: [
            'En caso que deseen retirarlo, se realiza la entrega de manera gratuita en el hall de la estación de tren de Llavallol, coordinando día y horario por WhatsApp.'
        ]
    },
    {
        subtitle: 'Envíos en GBA',
        description: [
            'Envío mediante repartidor con un costo adicional. El costo depende de la zona.',
            'En caso de seleccionar envío, se deberá abonar el mismo en su totalidad por transeferencia a Mercado Pago el mismo día a modo de anticipo, previo a la salida del repartidor.'
        ]
    },
    {
        subtitle: 'Envíos al Resto del País',
        description: [
            'Envío mediante Correo Argentino.',
            'Envío mediante OCA.',
            'Envío mediante Andreani.',
            'Envío mediante otras empresas de logística.'
        ]
    },
    {
        subtitle: 'Reglas de Envío',
        description: [
            'Se coordinará día y horario vía WhatsApp, una vez esté el repartidor en el lugar y hora acordado, se tendrá una tolerancia de 15 minutos.',
            'En caso de sobrepasar el tiemo de tolerancia, el pago no es reembolsable, y el repartidor coninuará con el resto de entregas, debiendose pactar una nueva fecha y horario.',
            'Dependiendo de la demanda, podría coordinarse para ese mismo día. En cualquier caso, se deberá abonar una nueva cuota de envío.'
        ]
    }
];

const arrPayMethods = [
    'Transferencia bancaria a cuenta de Mercado Pago',
    'Efectivo (10% de descuento)'
];

const createSocialMediaButton = () => {
    return `
        ${arrSocialMedia.map(media => {`
            <div class="col-12 col-sm-6 mb-3">
                <button type="button" class="btn btn-outline-${media.color} w-100" id="${media.name}-btn">
                    <i class="bi bi-${media.name}"></i> ${media.name.toUpperCase()}
                </button>
            </div>
        `}).join('')}
    `;
}

const arrSocialMedia = [
    {
        name: 'facebook',
        icon: 'bi bi-facebook',
        color: 'primary',
        url: 'https://www.facebook.com/share/16FkGbSYi4/?mibextid=wwXIfr'
    },
    {
        name: 'whatsapp',
        icon: 'bi bi-whatsapp',
        color: 'success',
        url: `https://wa.me/${arrInfoCardContent[1].value.replace(/\D/g, '')}` // Quita todo lo que no sea número y que busque el array por tipo y no porindex

    }
];

// Funciones
/*
const fillBody = () => {
    fillNavbar(arrContainers[0]);
    fillHeroSection(arrContainers[1]);
    fillAboutUsContainer(arrContainers[2]);
    fillFeaturesContainer(arrContainers[3]);
    fillProductsContainer(arrContainers[4]);
    fillShippingContainer(arrContainers[5]);
    fillPayMethodsContainer(arrContainers[6]);
    fillContactFormContainer(arrContainers[7]);
    fillFooterContainer(arrContainers[8]);

    
};
*/




















const createProductsNav = () => {
    items = '';
    
    for (let i = 0; i < arrProducts.length; i++) {
        items += `<li class="nav-item" role="presentation">`;
        if (i === 0) {
            // First tab is active
            items += `
                <button class="nav-link active" id="${arrProducts[i].id}-tab" data-bs-toggle="pill" data-bs-target="#${arrProducts[i].id}" type="button" role="tab" aria-controls="${arrProducts[i].id}" aria-selected="true">${arrProducts[i].title}</button>
            `;
        } else {
            items += `
                <button class="nav-link" id="${arrProducts[i].id}-tab" data-bs-toggle="pill" data-bs-target="#${arrProducts[i].id}" type="button" role="tab" aria-controls="${arrProducts[i].id}" aria-selected="false">${arrProducts[i].id}</button>
            `;
        }
        items += `</li>`;
    }

    return `
        <ul class="nav nav-pills justify-content-center mb-4" id="productsTab" role="tablist">
            ${items}
        </ul>
    `;
};



const createShippingOption = (i) => {
    return `
        <h4 class="subtitles">${arrShippingOptions[i].subtitle}</h4>
        ${arrShippingOptions[i].description.map(desc => `<p>${desc}</p>`).join('')}
        `;
};



const createPayMethodsList = () => {
    return `
        <ul class="list-unstyled">
            ${arrPayMethods.map(method => `
                <li>
                    ${method}
                </li>`).join('')}
        </ul>
    `;
};



const createContactForm = () => {
    return `
        <form id="contact-form" action="https://formsubmit.co/0174b80241b0dd7c9e1c0db7161a7aa0" method="POST">
            <!-- Campos ocultos de FormSubmit -->
            <input type="hidden" name="_subject" value="Nuevo mensaje desde la web">
            <input type="hidden" name="_template" value="table">
            <input type="hidden" name="_next" value="http://127.0.0.1:5500/#contact-form-container">
            <input type="hidden" name="_captcha" value="false">

            <div class="col-12 col-md-6 mb-3 px-1">
                <label for="name" class="form-label">Nombre</label>
                <input type="text" name="Nombre" class="form-control" id="name" placeholder="Solo letras" required>
            </div>
            <div class="col-12 col-md-6 mb-3 px-1">
                <label for="phone-number" class="form-label">Número de Teléfono</label>
                <input type="phone-number" name="Teléfono" class="form-control" id="phone-number" placeholder="Sin espacios ni guiones 1122223333" required>
            </div>
            <div class="col-12 mb-3">
                <label for="message" class="form-label">Mensaje</label>
                <textarea class="form-control" name="Mensaje" id="message" rows="3" placeholder="Recibirá una respuesta vía WhatsApp lo más pronto posible." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    `;
};

const createContactInfoCard = () => {
    return `
        <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xxl-6 ms-auto">
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">Información de Contacto</h5>
                    <div class="container">
                        ${createContactInfoCardItem()}
                    </div>
                </div>
            </div>
        </div>
    `;
};

const createContactInfoCardItem = () => {
    return arrInfoCardContent.map(item => `
        <div class="row mb-2">
            <div class="col-1"><i class="${item.icon}"></i></div>
            <div class="col-11">${item.type}: ${item.value}</div>
        </div>
    `).join('');
};









const fillBody = () => {
    arrContainers.forEach(container => {
        if (container.function) {        
            container.function(container);
        }
    });
};

fillBody();


























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
