import { dcard } from '../../indexpadre';
import styles from './carta.css';
<<<<<<< HEAD
import { datacard } from '../../../data/datacard';

=======
>>>>>>> ayuda
import like from '../../../../imagenes/like.png';
import dislike from '../../../../imagenes/dislike.png';
import save from '../../../../imagenes/save.png';
import saveoscuro from '../../../../imagenes/saveoscuro.png';
import coment from '../../../../imagenes/coment.png';
<<<<<<< HEAD
=======
import { addFavorite } from '../../../utils/firebase';
>>>>>>> ayuda

export enum AttributeCard {
	'name' = 'name',
	'image' = 'image',
	'profileimage' = 'profileimage',
<<<<<<< HEAD
=======
	'uid' = 'uid'
>>>>>>> ayuda
}

class card extends HTMLElement {
	name?: string;
	image?: string;
	profileimage?: string;
<<<<<<< HEAD

	constructor() {
		super(); // always call super() first in the ctor.
=======
	uid?: string

	constructor() {
		super();
>>>>>>> ayuda
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeCard, null> = {
			name: null,
			image: null,
			profileimage: null,
<<<<<<< HEAD
=======
			uid: null
>>>>>>> ayuda
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
<<<<<<< HEAD
			this.shadowRoot.innerHTML = `



				`;
=======
			this.shadowRoot.innerHTML = ``;
>>>>>>> ayuda

			const section = document.createElement('section');
			section.className = 'section';

<<<<<<< HEAD
			// Crear el elemento h1
=======
			const div = document.createElement('div');
			div.className = 'div';

			const divsegundo = document.createElement('div');
			divsegundo.className = 'divsegundo';

			const divtercero = document.createElement('div');
			divtercero.className = 'divtercero';



>>>>>>> ayuda
			const h1 = document.createElement('h1');
			h1.className = 'h1';
			h1.textContent = this.name || '';

<<<<<<< HEAD
			// Crear el primer elemento img
=======

>>>>>>> ayuda
			const img1 = document.createElement('img');
			img1.className = 'img-i';
			img1.src = this.profileimage || '';

<<<<<<< HEAD
			// Crear el segundo elemento img
=======

>>>>>>> ayuda
			const img2 = document.createElement('img');
			img2.className = 'img';
			img2.src = this.image || '';

			const likeIcon = document.createElement('img');
			likeIcon.src = like;
			likeIcon.className = 'likeicon1';

<<<<<<< HEAD
			// Agregar event listener al botón
			likeIcon.addEventListener('click', function () {
				// Verificar la imagen actual
				if (likeIcon.src === like) {
					// Cambiar a la nueva imagen
					likeIcon.src = dislike;
				} else {
					// Cambiar a la imagen original
=======

			likeIcon.addEventListener('click', function () {

				if (likeIcon.src === like) {

					likeIcon.src = dislike;
				} else {

>>>>>>> ayuda
					likeIcon.src = like;
				}
			});

			const comentIcon = document.createElement('img');
			comentIcon.src = coment;
			comentIcon.className = 'likeicon2';

			const saveIcon = document.createElement('img');
			saveIcon.src = save;
			saveIcon.className = 'saveicon';

<<<<<<< HEAD
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
=======
			saveIcon.addEventListener('click',  () => {
				if (saveIcon.src === save) {
					saveIcon.src = saveoscuro;
					console.log(this.uid)
					if (this.uid) {
						addFavorite(this.uid)
					}
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

>>>>>>> ayuda

			this.shadowRoot.appendChild(section);
		}

		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}

export default card;
customElements.define('my-card', card);
