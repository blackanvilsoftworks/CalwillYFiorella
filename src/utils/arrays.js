import { globalInfo } from './constants.js';

export const arrContainers = [
    {
        id: 'navbar-container',
        navbar: null,
        title: null,
        icon: null,
    },
    {
        id: 'hero-section',
        navbar: 'Inicio',
        title: null,
        icon: null,
    },
    {
        id: 'about-us-container',
        navbar: 'Sobre Nosotros',
        title: 'Sobre Nosotros',
        icon: 'bi bi-balloon-heart',
    },
    {
        id: 'features-container',
        navbar: 'Características',
        title: '¿Por Qué Elegirnos?',
        icon: 'bi bi-person-raised-hand',
    },
    {
        id: 'products-container',
        navbar: 'Productos',
        title: 'Nuestros Productos',
        icon: 'bi bi-cart',
    },
    {
        id: 'shipping-container',
        navbar: 'Envíos',
        title: 'Opciones de Envío',
        icon: 'bi bi-rocket-takeoff',
    },
    {
        id: 'pay-methods-container',
        navbar: 'Pagos',
        title: 'Métodos de Pago',
        icon: 'bi bi-cash-coin',
    },
    {
        id: 'contact-form-container',
        navbar: 'Contacto',
        title: 'Contáctanos',
        icon: 'bi bi-mailbox-flag',
    },
    {
        id: 'footer-container',
        navbar: null,
        title: null,
        icon: null,
    }
];

export const arrProducts = [
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
                title: 'Zapatos para Mujer',
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
                title: 'Zapatos para Hombres',
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

export const arrFeatures = [
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

export const arrInfoCardContent = [
    {
        type: 'Email',
        value: globalInfo.email,
        icon: 'bi bi-envelope-fill'
    },
    {
        type: 'Teléfono',
        value: globalInfo.phoneNumber,
        icon: 'bi bi-telephone-fill'
    },
    {
        type: 'Horario',
        value: 'Lunes a Sábado de 09:00 a 18:00',
        icon: 'bi bi-clock-fill'
    }
];

export const arrSocialMedia = [
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
        url: `https://wa.me/${globalInfo.phoneNumber.replace(/\D/g, '')}` // Quita todo lo que no sea número y que busque el array por tipo y no porindex
    }
];

export const arrShippingOptions = [
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

export const arrPayMethods = [
    'Transferencia bancaria a cuenta de Mercado Pago',
    'Efectivo (10% de descuento)'
];