import styles from './postcarddiv.css';
import '../../components/indexpadre';
import { dispatch } from "../../store/index";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/trips";

export class publica extends HTMLElement {
	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
	}
	connectedCallback() {
		this.render();
	}
	handleButtonpost() {
		dispatch(navigate(Screens.DASHBOARD));
}
	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;


			const something = this.ownerDocument.createElement('my-post');
			this.shadowRoot?.appendChild(something);

			const Logo = document.createElement('img');
			Logo.src = `../../../../imagenes/pesa.png`;
			Logo.alt = 'Logo';
			Logo.id = 'logo';
			this.shadowRoot.appendChild(Logo);		Logo.addEventListener('click', () => {
				Logo.addEventListener("click", this.handleButtonpost);
				console.log('Se hizo clic en "Sign up"');

			});
		}
		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}
customElements.define('public-page', publica);
