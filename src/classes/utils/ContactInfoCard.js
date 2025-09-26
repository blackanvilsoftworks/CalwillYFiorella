import ContactInfoCardItem from './ContactInfoCardItem.js';

export default class ContactInfoCard {
    constructor(arrInfoCardContent) {
        this.arrInfoCardContent = arrInfoCardContent;
    }

    getContactInfoCard() {
        return this.createContactInfoCard();
    }

    createContactInfoCard = () => {
        return `
            <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xxl-6 ms-auto">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Información de Contacto</h5>
                        <div class="container">
                            ${this.createContactInfoCardItems()}
                        </div>
                    </div>
                </div>
            </div>
        `;
    };
    
    createContactInfoCardItems() {
        return this.arrInfoCardContent.map(item => {
            const contactInfoCardItemInstance = new ContactInfoCardItem(item.icon, item.type, item.value);
            return contactInfoCardItemInstance.getContactInfoCardItem();
        }).join('');
    };
}
