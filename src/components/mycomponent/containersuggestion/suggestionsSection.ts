import Suggestions, { Attribute } from '../sidebar/Suggestions';
<<<<<<< HEAD
import { workers } from '../../../data/data';
import styles from './suggestionsSection.css';
=======
//import { workers } from '../../../data/data';
import styles from './suggestionsSection.css';
import '../navbar/botones';
>>>>>>> ayuda

export class sideC extends HTMLElement {
	Component: Suggestions[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

<<<<<<< HEAD
		const filterdworkers = workers.filter((item) => item.id);

		const shownWorkers = filterdworkers.slice(0, 8);

		shownWorkers.forEach((user: any) => {
			const mycomponentcard = this.ownerDocument.createElement('my-si') as Suggestions;
			mycomponentcard.setAttribute(Attribute.name, user.name);
			this.Component.push(mycomponentcard);
			console.log(this.Component);
		});
	}

	connectedCallback() {
		console.log('emtraaaa');

=======
	}

	connectedCallback() {
>>>>>>> ayuda
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
<<<<<<< HEAD
		titleSuggestions.textContent = 'Suggestions';
		titleSuggestions.className = 'h2';
		suggestionsSection.appendChild(titleSuggestions);

=======
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
		myBUTTONaccount.setAttribute('image', `../../../../imagenes/icons8-usuario-60.png`);
		suggestionsSection.appendChild(myBUTTONaccount);

>>>>>>> ayuda
		this.Component.forEach((component) => {
			suggestionsSection.appendChild(component);
		});
	}
}

customElements.define('my-sidec', sideC);
