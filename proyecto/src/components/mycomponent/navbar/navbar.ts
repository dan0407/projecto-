import CardStyle from './navbar.css';
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
		const images = ['pesa.png', 'icons8-chicle--100 1.png', 'icons8-usuario-60.png', 'Ellipse 15.png'];

		// Crear elementos
		const section = document.createElement('section');
		section.className = 'section';
		const titleSuggestions = document.createElement('h2');
		const nav = document.createElement('nav');
		const divBrand = document.createElement('div');
		const ul = document.createElement('ul');
		const liHome = document.createElement('li');
		const liUsers = document.createElement('li');
		const liAccount = document.createElement('li');
		const btnhome = document.createElement('a');
		const btnUsers = document.createElement('a'); //'button'
		const btnaccount = document.createElement('a');
		const imgLogo = document.createElement('img');
		const imgHome = document.createElement('img');
		const imgUsers = document.createElement('img');
		const imgAccount = document.createElement('img');

		// Establecer atributos y contenido
		section.innerHTML = `
		<style>
		${CardStyle}
		</style>
		`;

		imgLogo.src = `../../../../imagenes/${images[0]}`;
		imgLogo.alt = 'Logo';
		imgLogo.id = 'logo';

		imgHome.src = `../../../../imagenes/${images[1]}`;
		imgHome.id = 'navbar-icons';
		btnhome.href = '#';
		btnhome.textContent = 'HOME';
		btnhome.appendChild(imgHome);
		liHome.appendChild(btnhome);
		btnhome.addEventListener('click', () => {
			window.location.reload();
		});

		imgUsers.src = `../../../../imagenes/${images[2]}`;
		imgUsers.id = 'navbar-icons';
		btnUsers.id = 'usersbtn';
		btnUsers.textContent = 'USERS';
		btnUsers.addEventListener('click', () => {
			if (suggestionsSection) {
				suggestionsSection.classList.toggle('show');
			}
		});

		btnUsers.appendChild(imgUsers);
		liUsers.appendChild(btnUsers);

		imgAccount.src = `../../../../imagenes/${images[3]}`;
		imgAccount.id = 'navbar-icons';
		btnaccount.href = '#';
		btnaccount.textContent = 'ACCOUNT';
		btnaccount.appendChild(imgAccount);
		liAccount.appendChild(btnaccount);

		// Estructurar elementos
		ul.classList.add('navbar-nav');
		liHome.classList.add('nav-item');
		liUsers.classList.add('nav-item');
		liAccount.classList.add('nav-item');

		divBrand.classList.add('navbar-brand');
		divBrand.appendChild(imgLogo);

		ul.appendChild(liHome);
		ul.appendChild(liUsers);
		ul.appendChild(liAccount);

		nav.classList.add('navbar');
		nav.appendChild(divBrand);
		nav.appendChild(ul);

		const suggestionsSection = this.ownerDocument.createElement('section');
		suggestionsSection.className = 'hidden';

		titleSuggestions.textContent = 'Suggestions';
		suggestionsSection.appendChild(titleSuggestions);

		this.Component.forEach((component) => {
			suggestionsSection.appendChild(component);
		});

		section.appendChild(nav);
		section.appendChild(suggestionsSection);

		if (this.shadowRoot) {
			this.shadowRoot.innerHTML += '';
			this.shadowRoot.appendChild(section);
		}
	}
}
customElements.define('my-bar', Bar);
export default Bar;
