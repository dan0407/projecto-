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

	render() {
		const btnUsers = document.createElement('a');
		const navBar = this.ownerDocument.createElement('my-bar') as Bar;
		const card = this.ownerDocument.createElement('my-card') as Card;
		this.shadowRoot?.appendChild(navBar);

		datacard.forEach((cards) => {
			const card = this.ownerDocument.createElement('my-card') as Card;
			card.setAttribute(Attribute.name, cards.name);

			card.setAttribute(AttributeCard.image, cards.image);
			this.cards.push(card);
		});

		if (this.shadowRoot) {
			this.cards.forEach((mycard) => {
				this.shadowRoot?.appendChild(mycard);
			});
		}
		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}

customElements.define('app-container', AppContainer);
