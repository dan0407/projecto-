import styles from './editp.css';
import '../../components/indexpadre';
import { dispatch } from "../../store/index";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/trips";


export class editp extends HTMLElement {

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


			const something = this.ownerDocument.createElement('my-edit');
			this.shadowRoot?.appendChild(something);

			const Logo = document.createElement('img');
			Logo.src = `../imagenes/pesa.png`;
			Logo.alt = 'Logo';
			Logo.id = 'logo';
			this.shadowRoot.appendChild(Logo);		Logo.addEventListener('click', () => {
				Logo.addEventListener("click", this.handleButtonpost);
			});
		}
		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}
customElements.define('edit-page', editp);
