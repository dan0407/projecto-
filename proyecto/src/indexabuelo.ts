import './components/indexpadre';
import Suggestions, { Attribute } from './components/mycomponent/sidebar/Suggestions';
import Bar from './components/mycomponent/navbar/navbar';
import { workers } from './data/data';
import Component from './components/mycomponent/carta';
import Card, { AttributeCard } from './components/mycomponent/carta';

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
		this.shadowRoot?.appendChild(navBar);

		workers.forEach((cards) => {
			const card = this.ownerDocument.createElement('my-card') as Card;
			card.setAttribute(Attribute.name, cards.name);
			card.setAttribute(AttributeCard.image, cards.image);
			card.setAttribute(AttributeCard.profileImage, cards.profileImage);
			this.cards.push(card);
		});

		if (this.shadowRoot) {
			this.cards.forEach((mycard) => {
				this.shadowRoot?.appendChild(mycard);
			});
		}
	}
}

customElements.define('app-container', AppContainer);
