import './components/indexpadre';
import Suggestions, { Attribute } from './components/mycomponent/sidebar/Suggestions';
import Bar from './components/mycomponent/navbar/navbar';
import { workers } from './data/data';
import Card, { AttributeCard } from './components/mycomponent/carta/carta';
import { datacard } from './data/datacard';
import styles from './indexabuelo.css';

class AppContainer extends HTMLElement {
	cards: Card[] = [];
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

// 	render() {
// 		const divContainer = this.ownerDocument.createElement('div');
// 		divContainer.classList.add('container');

// 		const btnUsers = document.createElement('a');
// 		const navBar = this.createNavigationBar();
// 		const card = this.ownerDocument.createElement('my-card') as Card;
// 		this.shadowRoot?.appendChild(navBar);

// 		this.createCards();

// 		if (this.shadowRoot) {
// 			this.cards.forEach((divContainer) => {
// 				this.shadowRoot?.appendChild(divContainer);
// 				this.shadowRoot?.appendChild(divContainer);
// 			});
// 		}
// 	}

// 	createNavigationBar(): HTMLElement {
// 		const navBar = this.ownerDocument.createElement('my-bar') as Bar;
// 		// Aquí podrías configurar propiedades, añadir eventos, etc.
// 		return navBar;
// 	}

// 	createCards(): void {
// 		datacard.forEach((cards) => {
// 			const card = this.ownerDocument.createElement('my-card') as Card;
// 			card.setAttribute(AttributeCard.name, cards.name);
// 			card.setAttribute(AttributeCard.profileimage, cards.profileImage);
// 			card.setAttribute(AttributeCard.image, cards.image);
// 			this.cards.push(card);
// 		});
// 		const cssProfile = this.ownerDocument.createElement('style');
// 		cssProfile.innerHTML = styles;
// 		this.shadowRoot?.appendChild(cssProfile);
// 	}
// }
render() {
    const divContainer = this.ownerDocument.createElement('div');
    divContainer.classList.add('container');

    const navBar = this.createNavigationBar();
    const cardContainer = this.ownerDocument.createElement('div');

    // Crear y añadir las tarjetas
    this.createCards();
    this.cards.forEach((card) => {
        cardContainer.appendChild(card);
    });

    // Añadir elementos al contenedor principal
    divContainer.appendChild(navBar);
    divContainer.appendChild(cardContainer);

    // Añadir el contenedor principal al shadow root
    this.shadowRoot?.appendChild(divContainer);

    // Añadir estilos
    const cssProfile = this.ownerDocument.createElement('style');
    cssProfile.innerHTML = styles;
    this.shadowRoot?.appendChild(cssProfile);
}

createNavigationBar(): HTMLElement {
    const navBar = this.ownerDocument.createElement('my-bar') as Bar;
    // Aquí podrías configurar propiedades, añadir eventos, etc.
    return navBar;
}

createCards(): void {
    this.cards = []; // Inicializar el array de tarjetas
    datacard.forEach((cardData) => {
        const card = this.ownerDocument.createElement('my-card') as Card;
        card.setAttribute(AttributeCard.name, cardData.name);
        card.setAttribute(AttributeCard.profileimage, cardData.profileImage);
        card.setAttribute(AttributeCard.image, cardData.image);
        this.cards.push(card);
    });
}
}

customElements.define('app-container', AppContainer);
