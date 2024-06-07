import styles from './postcarddiv.css';
import '../../components/indexpadre';
<<<<<<< HEAD


export enum AttributeCard {
	'name' = 'name',
	'image' = 'image',
}

export class publica extends HTMLElement {
	name?: string;
	image?: string;

=======
import { dispatch } from "../../store/index";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/trips";

export class publica extends HTMLElement {
>>>>>>> ayuda
	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
	}
<<<<<<< HEAD

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
=======
	connectedCallback() {
		this.render();
	}
	handleButtonpost() {
		dispatch(navigate(Screens.DASHBOARD));
}
>>>>>>> ayuda
	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;


			const something = this.ownerDocument.createElement('my-post');
			this.shadowRoot?.appendChild(something);

			const Logo = document.createElement('img');
			Logo.src = `../imagenes/pesa.png`;
			Logo.alt = 'Logo';
			Logo.id = 'logo';
<<<<<<< HEAD
			this.shadowRoot.appendChild(Logo);
=======
			this.shadowRoot.appendChild(Logo);		Logo.addEventListener('click', () => {
				Logo.addEventListener("click", this.handleButtonpost);
			});
>>>>>>> ayuda
		}
		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}
customElements.define('public-page', publica);
