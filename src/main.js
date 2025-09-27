/* ===== IMPORTS ===== */

/* ===== UTILS ===== */

// ===== ARRAYS =====
import {
    arrContainers,
} from './utils/arrays.js';

// ===== EVENT LISTENERS =====
import {
    facebookBtnHandler,
    whatsappBtnHandler
} from './utils/eventListeners.js';

// ===== VALIDACIONES =====
import { 
    nameValidation, 
    phoneNumberValidation, 
    messageValidation 
} from './utils/validations.js';


/* ===== COMPONENTS ===== */
import Navbar      from './components/Navbar.js';
import HeroSection from './components/HeroSection.js';
import AboutUs     from './components/AboutUs.js';
import Feature     from './components/Feature.js';
import Product     from './components/Product.js';
import Shipping    from './components/Shipping.js';
import PayMethod   from './components/PayMethod.js';
import ContactForm from './components/ContactForm.js';
import Footer      from './components/Footer.js';

// ===== INICIALIZACIÓN =====
const fillBody = () => {
    let obj = arrContainers[0];
    document.getElementById(obj.id).innerHTML = new Navbar(obj.id).getNavbar();
    obj = arrContainers[1];
    document.getElementById(obj.id).innerHTML = new HeroSection().getHeroSection();
    obj = arrContainers[2];
    document.getElementById(obj.id).innerHTML = new AboutUs(obj.title, obj.icon).getAboutUs();
    obj = arrContainers[3];
    document.getElementById(obj.id).innerHTML = new Feature(obj.title, obj.icon).getFeature();
    obj = arrContainers[4];
    document.getElementById(obj.id).innerHTML = new Product(obj.title, obj.icon).getProduct();
    obj = arrContainers[5];
    document.getElementById(obj.id).innerHTML = new Shipping(obj.title, obj.icon).getShipping();
    obj = arrContainers[6];
    document.getElementById(obj.id).innerHTML = new PayMethod(obj.title, obj.icon).getPayMethods();
    obj = arrContainers[7];
    document.getElementById(obj.id).innerHTML = new ContactForm(obj.title, obj.icon).getContactForm();
    obj = arrContainers[8];
    document.getElementById(obj.id).innerHTML = new Footer().getFooter();
};

fillBody();

// ===== SELECTORES DEL DOM =====
const contacForm = document.getElementById('contact-form');
const toFacebookBtn = document.getElementById('facebook-btn');
const toWhatsappBtn = document.getElementById('whatsapp-btn');

// ===== EVENT LISTENERS =====
toFacebookBtn.addEventListener('click', facebookBtnHandler);
toWhatsappBtn.addEventListener('click', whatsappBtnHandler);
contacForm.addEventListener('submit', e => {
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

    const whatsappLinkPhoneNumber = `https://wa.me/549${cleanedPhoneNumber}`;
    
    inputPhoneNumber.value = whatsappLinkPhoneNumber;

    contacForm.submit();
    contacForm.reset();
});