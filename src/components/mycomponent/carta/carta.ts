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
			this.shadowRoot.innerHTML = `



				`;

			const section = document.createElement('section');
			section.className = 'section';

			// Crear el elemento h1
			const h1 = document.createElement('h1');
			h1.className = 'h1';
			h1.textContent = this.name || '';

			// Crear el primer elemento img
			const img1 = document.createElement('img');
			img1.className = 'img-i';
			img1.src = this.profileimage || '';

			// Crear el segundo elemento img
			const img2 = document.createElement('img');
			img2.className = 'img';
			img2.src = this.image || '';

			const likeIcon = document.createElement('img');
			likeIcon.src = like;
			likeIcon.className = 'likeicon1';

			// Agregar event listener al botón
			likeIcon.addEventListener('click', function () {
				// Verificar la imagen actual
				if (likeIcon.src === like) {
					// Cambiar a la nueva imagen
					likeIcon.src = dislike;
				} else {
					// Cambiar a la imagen original
					likeIcon.src = like;
				}
			});

			const comentIcon = document.createElement('img');
			comentIcon.src = coment;
			comentIcon.className = 'likeicon2';

			const saveIcon = document.createElement('img');
			saveIcon.src = save;
			saveIcon.className = 'saveicon';

			// Agregar event listener al botón
			saveIcon.addEventListener('click', function () {
				// Verificar la imagen actual
				if (saveIcon.src === save) {
					// Cambiar a la nueva imagen
					saveIcon.src = saveoscuro;
				} else {
					// Cambiar a la imagen original
					saveIcon.src = save;
				}
			});
			section.appendChild(h1);
			section.appendChild(img1);
			section.appendChild(img2);
			section.appendChild(saveIcon);
			section.appendChild(likeIcon);
			section.appendChild(comentIcon);

			this.shadowRoot.appendChild(section);
		}

		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}

export default card;
customElements.define('my-card', card);
