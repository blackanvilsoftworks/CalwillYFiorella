export default class InfoCardContent {
    constructor(email, phoneNumber) {
        this.arrInfoCardContent = [
            {
                type: 'Email',
                value: email,
                icon: 'bi bi-envelope-fill'
            },
            {
                type: 'Teléfono',
                value: phoneNumber,
                icon: 'bi bi-telephone-fill'
            },
            {
                type: 'Horario',
                value: 'Lunes a Sábado de 09:00 a 18:00',
                icon: 'bi bi-clock-fill'
            }
        ];
    }
    
    getInfoCardContent() {
        return this.arrInfoCardContent;
    }
}