const contacForm = document.getElementById('contact-form');
const toWhatsappBtn = document.getElementById('whatsapp-btn');
const toFacebookBtn = document.getElementById('facebook-btn');
const nameRegex = /^[A-Za-z\s]+$/;
const phoneNumberRegex = /^[0-9]{10}$/;
const messageRegex = /^[A-Za-z0-9\-\s]/g; // todo Que esto valide que no se metan símbolos extraños

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

    whatsappLinkPhoneNumber = ` Link al WhatsApp: https://wa.me/549${cleanedPhoneNumber}`;

    /*
    const message = `Hola,%20soy%20${encodeURIComponent(name)}.%20Te%20contacto%20desde%20la%20web%20de%20Calwill%20%26%20Fiorella`;
    
    const whatsappLink = `https://wa.me/54${phone}?text=${message}`;
    */
    
    inputMessage.value += whatsappLinkPhoneNumber;
    
    this.submit(); // Esto activa FormSubmit
    contacForm.reset();
    alert('Formulario enviado con éxito.');
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