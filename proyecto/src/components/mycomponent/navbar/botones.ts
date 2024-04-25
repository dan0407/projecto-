
export enum AttributeCard {
	'name' = 'name',
	'image' = 'image',

}

export class button extends HTMLElement {
	name?: string;
	image?: string;


	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
		console.log("Contructor")
	}

	static get observedAttributes() {
		const attrs: Record<AttributeCard, null> = {
			name: null,
			image: null,
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
		console.log("Render boon Home")
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ""

		}

		const CONTAINER = document.createElement('div');
		CONTAINER.classList.add('nav-item');
		this.shadowRoot?.appendChild(CONTAINER)

		
		const btnhome = document.createElement('p');
		if (this.name) {
			btnhome.textContent = this.name
			
		}
		CONTAINER.appendChild(btnhome);
		
		const img = document.createElement('img');
		img.src = `../../../../imagenes/${this.image}`;
		img.id = 'navbar-icons';
		CONTAINER.appendChild(img);

		if (this.name === "HOME") {
			CONTAINER.addEventListener('click', () => {
				window.location.reload();
			});
		}
		if (this.name === "user") {
			CONTAINER.addEventListener('click', () => {
			
				suggestionsSection.classList.toggle('show');

		});
	

	}
}
}
customElements.define('my-button', button);
