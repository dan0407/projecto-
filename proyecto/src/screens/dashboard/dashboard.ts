import Suggestions, { Attribute } from '../../components/mycomponent/sidebar/Suggestions';
import Bar from '../../components/mycomponent/navbar/navbar';
import { workers } from '../../data/data';
import Card, { AttributeCard } from '../../components/mycomponent/carta/carta';
import { datacard } from '../../data/datacard';
import styles from './dashboard.css';

import '../../components/indexpadre';

export class dashboard extends HTMLElement {
	cards: Card[] = [];
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		const divContainer = this.ownerDocument.createElement('div');
		divContainer.classList.add('container');

		const navBar = this.createNavigationBar();
		const cardContainer = this.ownerDocument.createElement('div');

		const sideBarC = this.ownerDocument.createElement('my-sidec');
		this.shadowRoot?.appendChild(sideBarC);

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

customElements.define('app-dashboard', dashboard);
