import styles from './perfil.css';
import '../../components/indexpadre';
import { addObserver, appState, dispatch } from "../../store/index";
import { getUserDataAction } from '../../store/actions';
import { navigate } from '../../store/actions';
import { Screens } from '../../types/trips';

export enum AttributeCard {
	'name' = 'name',
	'image' = 'image',
}

export class perfilPge extends HTMLElement {
	name?: string;
	image?: string;

	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
		addObserver(this);
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
	async connectedCallback() {
		if (appState.userdata.username === "" || Object.keys(appState.userdata).length === 0) {
			const action = await getUserDataAction(String(appState.user));
			dispatch(action);
		} else {
			this.render();
		}
	}

	handleButton() {
		dispatch(navigate(Screens.DASHBOARD));
	}

	render() {
		if (this.shadowRoot) {
			console.log("prueba")
			console.log(appState.userdata);

			this.shadowRoot.innerHTML = ``;
			const something = this.ownerDocument.createElement('my-perfil');
			this.shadowRoot?.appendChild(something);

			const Logo = document.createElement('img');
			Logo.src = `../../../../imagenes/pesa.png`;
			Logo.alt = 'Logo';
			Logo.id = 'logo';
			this.shadowRoot.appendChild(Logo);		Logo.addEventListener('click', () => {
				Logo.addEventListener("click", this.handleButton);
				console.log('Se hizo clic en "Sign up"');

			});



		}
		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}
customElements.define('perfil-page', perfilPge);
