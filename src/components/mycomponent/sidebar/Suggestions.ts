import styles from './Suggestions.css';

export enum Attribute {
	'name' = 'name',
}
class Suggestions extends HTMLElement {
	name?: string;

	static get observedAttributes() {
		return ['name'];
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case 'name':
				if (newValue !== null) {
					this.name = newValue;
				}
				break;
		}
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
		this.setupEventListeners();
		// const sidebar = this.shadowRoot?.querySelector('.sidebar') as HTMLElement;
		// console.log('Element', sidebar);
	}

	setupEventListeners() {
		this.addEventListener('btnBarritaClicked', () => {
			console.log('Evento btnBarritaClicked recibido en Suggestions');
			// Realiza las acciones necesarias aquí cuando se recibe el evento
		});
	}

	render() {
		let images = ['pesa.png', 'icons8-chicle--100 1.png', 'icons8-usuario-60.png', 'Ellipse 15.png'];

		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
									<style>
									${styles}
									</style>
									<section class='suggestion-item'>
										<a href="#"><img src="../../../../imagenes/Ellipse 15.png" id="navbar-icons" />${this.name}</a>
                    </section>

                `;
		}
	}
}
customElements.define('my-si', Suggestions);
export default Suggestions;
