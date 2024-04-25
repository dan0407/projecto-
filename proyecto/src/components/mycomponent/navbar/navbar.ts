import styles from './navbar.css';
import Suggestions, { Attribute } from '../sidebar/Suggestions';
import { workers } from '../../../data/data';

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
		//const liHome = document.createElement('div');
		//const liUsers = document.createElement('div');
		//const liAccount = document.createElement('div');
		//const btnhome = document.createElement('a');
		//const btnUsers = document.createElement('a'); //'button'
		//const btnaccount = document.createElement('a');
		//	const imgHome = document.createElement('img');
		//const imgUsers = document.createElement('img');
		//const imgAccount = document.createElement('img');

		// Establecer atributos y contenido


		//imgHome.src = `../../../../imagenes/${images[1]}`;
		//imgHome.id = 'navbar-icons';
		//btnhome.href = '#';
		//btnhome.textContent = 'HOME';
		//btnhome.appendChild(imgHome);
		//liHome.appendChild(btnhome);
		//btnhome.addEventListener('click', () => {
		//	window.location.reload();
		//});

		//imgUsers.src = `../../../../imagenes/${images[2]}`;
		//imgUsers.id = 'navbar-icons';
		//btnUsers.id = 'usersbtn';
		//btnUsers.textContent = 'USERS';
		//btnUsers.addEventListener('click', () => {
		//	if (suggestionsSection) {
		//		suggestionsSection.classList.toggle('show');
		//	}
		//});

		//btnUsers.appendChild(imgUsers);
		//liUsers.appendChild(btnUsers);

		//imgAccount.src = `../../../../imagenes/${images[3]}`;
		//imgAccount.id = 'navbar-icons';
		//btnaccount.href = '#';
		//btnaccount.textContent = 'ACCOUNT';
		//btnaccount.appendChild(imgAccount);
		//liAccount.appendChild(btnaccount);

		// Estructurar elementos
		//liHome.classList.add('nav-item');
		//liUsers.classList.add('nav-item');
		//liAccount.classList.add('nav-item');


		//ul.appendChild(liHome);
		//ul.appendChild(liUsers);
		//ul.appendChild(liAccount);


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

		const myBUTTONhome = this.ownerDocument.createElement('my-button')
		myBUTTONhome.setAttribute('name', 'HOME');
		myBUTTONhome.setAttribute('image', `../../../../imagenes/icons8-chicle--100 1.png`);
		nav.appendChild(myBUTTONhome)

		const myBUTTONuser = this.ownerDocument.createElement('my-button')
		myBUTTONuser.setAttribute('name', 'USERS');
		myBUTTONuser.setAttribute('image', `../../../../imagenes/icons8-usuario-60.png`);
		nav.appendChild(myBUTTONuser)

		const myBUTTONaccount = this.ownerDocument.createElement('my-button')
		myBUTTONaccount.setAttribute('name', 'ACCOUNT');
		myBUTTONaccount.setAttribute('image', `../../../../imagenes/Ellipse 15.png`);
		nav.appendChild(myBUTTONaccount)

		const myBUTTONpost = this.ownerDocument.createElement('my-button')
		myBUTTONpost.setAttribute('name', 'POST');
		myBUTTONpost.setAttribute('image', `../../../../imagenes/icons8-add-100 1.png`);
		nav.appendChild(myBUTTONpost)

		
		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);


	}
}

customElements.define('my-bar', Bar);
export default Bar;
