import { dcard } from '../../indexpadre';
import styles from './carta.css';
import { datacard } from '../../../data/datacard';

import like from '../../../../imagenes/like.png';
import dislike from '../../../../imagenes/dislike.png';
import save from '../../../../imagenes/save.png';
import saveoscuro from '../../../../imagenes/saveoscuro.png';
import coment from '../../../../imagenes/coment.png';

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
			const section = document.createElement('section');
			section.className = 'carta';

			const div = document.createElement('div');
			div.className = 'lo';

			const h1 = document.createElement('h1');
			h1.className = 'h1';
			h1.textContent = this.name || ''; // Usa textContent para establecer el texto

			const profileImg = document.createElement('img');
			profileImg.className = 'img-i';
			profileImg.src = this.profileimage || ''; // Usa src para establecer la fuente de la imagen

			const img = document.createElement('img');
			img.className = 'img';
			img.src = this.image || ''; // Usa src para establecer la fuente de la imagen

			const likeIcon = document.createElement('img');
			likeIcon.src = like;
			likeIcon.className = 'likeicon1';

			const comentIcon = document.createElement('img');
			comentIcon.src = coment;
			comentIcon.className = 'likeicon2';

			const saveIcon = document.createElement('img');
			saveIcon.src = save;
			saveIcon.className = 'saveicon';

			div.appendChild(likeIcon);
			div.appendChild(comentIcon);
			div.appendChild(saveIcon);

			div.appendChild(h1);
			div.appendChild(profileImg);
			div.appendChild(img);
			section.appendChild(div);
			this.shadowRoot.appendChild(section);
		}

		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}

export default card;
customElements.define('my-card', card);
