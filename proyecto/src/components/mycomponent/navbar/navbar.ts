import styles from './navbar.css';
import Suggestions, { Attribute } from '../sidebar/Suggestions';
import { workers } from '../../../data/data';
import './botones';

class Bar extends HTMLElement {
	Component: Suggestions[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		const filterdworkers = workers.filter((item) => item.id);

		const shownWorkers = filterdworkers.slice(0, 8);

		shownWorkers.forEach((user) => {
			const mycomponentcard = this.ownerDocument.createElement('my-si') as Suggestions;
			mycomponentcard.setAttribute(Attribute.name, user.name);
			this.Component.push(mycomponentcard);
			console.log(this.Component);
		});
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

		const myBUTTONhome = this.ownerDocument.createElement('my-button');
		myBUTTONhome.setAttribute('name', 'HOME');
		myBUTTONhome.setAttribute('image', `../../../../imagenes/icons8-chicle--100 1.png`);
		nav.appendChild(myBUTTONhome);

		const myBUTTONpost = this.ownerDocument.createElement('my-button');
		myBUTTONpost.setAttribute('name', 'POST');
		myBUTTONpost.setAttribute('image', `../../../../imagenes/icons8-add-100 1.png`);
		nav.appendChild(myBUTTONpost);

		const myBUTTONuser = this.ownerDocument.createElement('my-button');
		myBUTTONuser.setAttribute('name', 'USERS');
		myBUTTONuser.setAttribute('image', `../../../../imagenes/icons8-usuario-60.png`);
		nav.appendChild(myBUTTONuser);

		const myBUTTONaccount = this.ownerDocument.createElement('my-button');
		myBUTTONaccount.setAttribute('name', 'ACCOUNT');
		myBUTTONaccount.setAttribute('image', `../../../../imagenes/Ellipse 15.png`);
		nav.appendChild(myBUTTONaccount);

		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}

customElements.define('my-bar', Bar);
export default Bar;
