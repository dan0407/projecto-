import { dcard } from '../../indexpadre';
import styles from './carta.css';
import { datacard } from '../../../data/datacard';

export enum AttributeCard {
	'name' = 'name',
	'image' = 'image',
	'profileImage' = 'profileImage',
}

class card extends HTMLElement {
	name?: string;
	image?: string;
	profileImage?: string;

	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeCard, null> = {
			name: null,
			image: null,
			profileImage: null,
		};
		return Object.keys(attrs);
	}
	attributeChangedCallback(propName: AttributeCard, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}

		this.render();
	}
	connectedCallback() {
		this.render();
	}
	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `<section class="carta">
			<h1 class="h1">${this.name}</h1>

	      <img class="img" src=${this.image}/>
				</section>
	      `;
			const cssProfile = this.ownerDocument.createElement('style');
			cssProfile.innerHTML = styles;
			this.shadowRoot?.appendChild(cssProfile);
		}

		const miDiv = document.createElement('miDiv');

		miDiv.addEventListener('click', function () {
			if (miDiv.classList.contains('like')) {
				miDiv.classList.remove('like');
			} else {
				miDiv.classList.add('like');
			}
		});
	}
}

export default card;
customElements.define('my-card', card);
