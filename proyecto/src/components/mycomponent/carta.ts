import { datacard } from '../indexpadre';

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
      <h1>${this.name}</h1>
      <img src=${this.image}/>
      <img src=${this.profileImage}/>
			</section>
      `;
		}
		('<div id="miDiv" class="btn dislike"></div>');

		const miDiv = document.getElementById('miDiv') as HTMLElement;
		// Agrega un evento de clic al div
		miDiv.addEventListener('click', () => {
			// Verifica si el div tiene la clase "like"
			if (miDiv.classList.contains('like')) {
				// Si la tiene, quítala
				miDiv.classList.remove('like');
			} else {
				// Si no la tiene, quita la clase "like" y agrega la clase "click"
				miDiv.classList.add('like');
			}
			console.log(miDiv.classList);
		});
	}
}

export default card;
customElements.define('my-card', card);
