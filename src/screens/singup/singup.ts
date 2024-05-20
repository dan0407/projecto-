import styles from './singup.css';
import '../../components/indexpadre';
import { dispatch } from "../../store/index";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/trips";


export class singuppage extends HTMLElement {
	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}


handleButtonsing() {
	dispatch(navigate(Screens.LOGIN));
}
	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;
			const something = this.ownerDocument.createElement('my-singup');
			this.shadowRoot?.appendChild(something);

			const Logo = document.createElement('img');
			Logo.src = `../../../../imagenes/pesa.png`;
			Logo.alt = 'Logo';
			Logo.id = 'logo';
			this.shadowRoot.appendChild(Logo);		Logo.addEventListener('click', () => {
				Logo.addEventListener("click", this.handleButtonsing);
				console.log('Se hizo clic en "Sign up"');

			});
		}
		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}

customElements.define('singup-page', singuppage);
export default singuppage;
