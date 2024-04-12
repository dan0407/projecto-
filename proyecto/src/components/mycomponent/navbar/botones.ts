export enum AttributeCard {
	'name' = 'name',
	'image' = 'image',
	
}

class button extends HTMLElement {
	name?: string;
	image?: string;


	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
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
        const images = ['pesa.png', 'icons8-chicle--100 1.png', 'icons8-usuario-60.png', 'Ellipse 15.png'];


        const CONTAINER = document.createElement('div');
        const img= document.createElement('img');
        img.src = `../../../../imagenes/${images[1]}`;
		img.id = 'navbar-icons';
        const btnhome = document.createElement('a');
		btnhome.href = '#';
		btnhome.textContent = 'HOME';
		btnhome.appendChild(img);
		CONTAINER.appendChild(btnhome);
		btnhome.addEventListener('click', () => {
			window.location.reload();
		});
        CONTAINER.classList.add('nav-item');
if( this.name === "HOME"){  
    
	CONTAINER.addEventListener('click', () => {
		if (suggestionsSection) {
			suggestionsSection.classList.toggle('show');
		}
	});

}
        


    }
}
customElements.define('my-button', button);
export default button;