import styles from './singup.css';
import '../../components/indexpadre';
<<<<<<< HEAD
=======
import { dispatch } from "../../store/index";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/trips";

>>>>>>> ayuda

export class singuppage extends HTMLElement {
	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}
<<<<<<< HEAD
=======


handleButtonsing() {
	dispatch(navigate(Screens.LOGIN));
}
>>>>>>> ayuda
	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;
			const something = this.ownerDocument.createElement('my-singup');
			this.shadowRoot?.appendChild(something);

			const Logo = document.createElement('img');
			Logo.src = `../imagenes/pesa.png`;
			Logo.alt = 'Logo';
			Logo.id = 'logo';
<<<<<<< HEAD
			this.shadowRoot.appendChild(Logo);
=======
			this.shadowRoot.appendChild(Logo);		Logo.addEventListener('click', () => {
				Logo.addEventListener("click", this.handleButtonsing);
			});
>>>>>>> ayuda
		}
		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}

customElements.define('singup-page', singuppage);
export default singuppage;
