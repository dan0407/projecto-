import styles from './navbar.css';
import Suggestions, { Attribute } from '../sidebar/Suggestions';
//import { workers } from '../../../data/data';
import './botones';

class Bar extends HTMLElement {
	Component: Suggestions[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		const images = ['', 'icons8-usuario-60.png', 'Ellipse 15.png'];

		// Crear elementos
		const section = document.createElement('section');
		section.className = 'section';
		if (this.shadowRoot) {
			this.shadowRoot.appendChild(section);
		}

		const nav = document.createElement('nav');
		nav.classList.add('navbar');
		section.appendChild(nav);

		const ul = document.createElement('ul');
		ul.classList.add('navbar-nav');
		nav.appendChild(ul);

		const divBrand = document.createElement('div');
		divBrand.classList.add('navbar-brand');
		nav.appendChild(divBrand);

		const imgLogo = document.createElement('img');
		imgLogo.src = `../../../../imagenes/pesa.png`;
		imgLogo.alt = 'Logo';
		imgLogo.id = 'logo';
		divBrand.appendChild(imgLogo);

		const myBUTTONuser = this.ownerDocument.createElement('my-button');
		myBUTTONuser.setAttribute('name', 'MENU');
		myBUTTONuser.setAttribute('image', `../../../../imagenes/icons8-menu-50.png`);
		nav.appendChild(myBUTTONuser);



		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}

customElements.define('my-bar', Bar);
export default Bar;
