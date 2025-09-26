export default class SocialMedia {
    constructor(phoneNumber) {
        this.socialMedia = [
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
                url: `https://wa.me/${phoneNumber.replace(/\D/g, '')}` // Quita todo lo que no sea número y que busque el array por tipo y no porindex
            }
        ];
    }

    getSocialMedia() {
        return this.socialMedia;
    }
}