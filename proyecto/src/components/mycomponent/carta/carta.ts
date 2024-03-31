import { dcard } from '../../indexpadre';
import styles from './carta.css';
import { datacard } from '../../../data/datacard';

import like from '../../../../imagenes/like.png';
import dislike from '../../../../imagenes/dislike.png';
import save from '../../../../imagenes/save.png';
import saveoscuro from '../../../../imagenes/saveoscuro.png';

export enum AttributeCard {
	'name' = 'name',
	'image' = 'image',
	'profileimage' = 'profileimage',
}

class card extends HTMLElement {
	name?: string;
	image?: string;
	profileimage?: string;

	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeCard, null> = {
			name: null,
			image: null,
			profileimage: null,
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
			<div class="lo">
			<h1 class="h1">${this.name}</h1>
			<img class="img-i" src=${this.profileimage}/>
	      <img class="img" src=${this.image}/>
				</div>
				</section>
	      `;
			const iconContainer = document.createElement('div');
			iconContainer.className = 'icon-container';

			const likeIcon = document.createElement('img');
			likeIcon.src = like;
			likeIcon.className = 'like-icon';

			const saveIcon = document.createElement('img');
			saveIcon.src = save;
			saveIcon.className = 'save-icon';

			iconContainer.appendChild(likeIcon);
			iconContainer.appendChild(saveIcon);
			this.shadowRoot?.appendChild(iconContainer);
		}
		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}

export default card;
customElements.define('my-card', card);
