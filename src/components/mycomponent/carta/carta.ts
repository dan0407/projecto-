import { dcard } from '../../indexpadre';
import styles from './carta.css';
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
		super(); 
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
			this.shadowRoot.innerHTML = ``;

			const section = document.createElement('section');
			section.className = 'section';

			const div = document.createElement('div');
			div.className = 'div';

			const divsegundo = document.createElement('div');
			divsegundo.className = 'divsegundo';

			const divtercero = document.createElement('div');
			divtercero.className = 'divtercero';
			


			const h1 = document.createElement('h1');
			h1.className = 'h1';
			h1.textContent = this.name || '';


			const img1 = document.createElement('img');
			img1.className = 'img-i';
			img1.src = this.profileimage || '';


			const img2 = document.createElement('img');
			img2.className = 'img';
			img2.src = this.image || '';

			const likeIcon = document.createElement('img');
			likeIcon.src = like;
			likeIcon.className = 'likeicon1';

			
			likeIcon.addEventListener('click', function () {
			
				if (likeIcon.src === like) {
					
					likeIcon.src = dislike;
				} else {
					
					likeIcon.src = like;
				}
			});

			const comentIcon = document.createElement('img');
			comentIcon.src = coment;
			comentIcon.className = 'likeicon2';

			const saveIcon = document.createElement('img');
			saveIcon.src = save;
			saveIcon.className = 'saveicon';

			saveIcon.addEventListener('click', function () {
				if (saveIcon.src === save) {
					saveIcon.src = saveoscuro;
				} else {
					saveIcon.src = save;
				}
			});
			section.appendChild(divtercero);
			divtercero.appendChild(img1);
			divtercero.appendChild(h1);
			section.appendChild(img2);
			div.appendChild(likeIcon);
			div.appendChild(comentIcon);
			divsegundo.appendChild(div)
			divsegundo.appendChild(saveIcon);

			section.appendChild(divsegundo);


			this.shadowRoot.appendChild(section);
		}

		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}

export default card;
customElements.define('my-card', card);
