import Suggestions, { Attribute } from '../sidebar/Suggestions';
//import { workers } from '../../../data/data';
import styles from './suggestionsSection.css';
import '../navbar/botones';

export class sideC extends HTMLElement {
	Component: Suggestions[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

	}

	connectedCallback() {
		console.log('emtraaaa');

		this.render();
	}

	render() {
		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);

		const suggestionsSection = this.ownerDocument.createElement('section');
		suggestionsSection.className = 'hidden';
		this.shadowRoot?.appendChild(suggestionsSection);

		const titleSuggestions = document.createElement('h2');
		titleSuggestions.textContent = 'MENU';
		titleSuggestions.className = 'h2';
		suggestionsSection.appendChild(titleSuggestions);

		const myBUTTONpost = this.ownerDocument.createElement('my-button');
		myBUTTONpost.setAttribute('name', 'POST');
		myBUTTONpost.setAttribute('image', `../../../../imagenes/icons8-add-100 1.png`);
		suggestionsSection.appendChild(myBUTTONpost);

		const myBUTTONlogin = this.ownerDocument.createElement('my-button');
		myBUTTONlogin.setAttribute('name', 'login');
		myBUTTONlogin.setAttribute('image', `../../../../imagenes/icons8-accede-redondeado-derecho-100.png`);
		suggestionsSection.appendChild(myBUTTONlogin);

		const myBUTTONaccount = this.ownerDocument.createElement('my-button');
		myBUTTONaccount.setAttribute('name', 'ACCOUNT');
		myBUTTONaccount.setAttribute('image', `../../../../imagenes/Ellipse 15.png`);
		suggestionsSection.appendChild(myBUTTONaccount);

		this.Component.forEach((component) => {
			suggestionsSection.appendChild(component);
		});
	}
}

customElements.define('my-sidec', sideC);
