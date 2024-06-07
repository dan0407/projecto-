import styles from './botones.css';
import '../../indexpadre';
<<<<<<< HEAD
import { addObserver, appState, dispatch } from "../../../store/index";
import { navigate } from "../../../store/actions";
import { Screens } from "../../../types/trips";
=======
import { dispatch } from "../../../store/index";
import { navigate } from "../../../store/actions";
import { Screens } from "../../../types/trips";

>>>>>>> ayuda
export enum AttributeCard {
	'name' = 'name',
	'image' = 'image',
}

export class button extends HTMLElement {
	name?: string;
	image?: string;

	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
<<<<<<< HEAD
		console.log('Contructor');
=======
>>>>>>> ayuda
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
	connectedCallback() {
		this.render();
	}
	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';
		}

		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);

		const CONTAINER = document.createElement('div');
		CONTAINER.classList.add('nav-item');
		this.shadowRoot?.appendChild(CONTAINER);

		const btnhome = document.createElement('p');
		if (this.name) {
			btnhome.textContent = this.name;
		}
		CONTAINER.appendChild(btnhome);

		const img = document.createElement('img');
		img.src = `../../../../imagenes/${this.image}`;
<<<<<<< HEAD
		img.id = 'navbar-icons';
=======
		img.className= 'navbar-icons';
>>>>>>> ayuda
		CONTAINER.appendChild(img);

		if (this.name === 'HOME') {
			CONTAINER.addEventListener('click', () => {
				window.location.reload();
			});
		}
<<<<<<< HEAD
		if (this.name === 'USERS') {
=======
		if (this.name === 'MENU') {
>>>>>>> ayuda
			CONTAINER.addEventListener('click', () => {
				const suggestionContainer = this.ownerDocument
					.querySelector('app-container')
					?.shadowRoot?.querySelector('app-dashboard')
					?.shadowRoot?.querySelector('my-sidec')
					?.shadowRoot?.querySelector('section');

<<<<<<< HEAD
				console.log('Sugggestion');
				console.log(suggestionContainer);

				if (suggestionContainer?.className === 'hidden') {
					console.log('Hidden');
=======

				if (suggestionContainer?.className === 'hidden') {
>>>>>>> ayuda
					suggestionContainer.classList.remove('hidden');
					suggestionContainer.classList.add('suggestionsSectionShow');
				} else if (suggestionContainer?.className === 'suggestionsSectionShow') {
					suggestionContainer.classList.remove('suggestionsSectionShow');
					suggestionContainer.classList.add('hidden');
				}
			});
		}
		if (this.name === 'POST') {
			CONTAINER.addEventListener('click', () => {
				dispatch(navigate(Screens.POST))
<<<<<<< HEAD
				console.log('Se hizo clic en el botón de "POST"');
=======
			});
		}
		if (this.name === 'login') {
			CONTAINER.addEventListener('click', () => {
				dispatch(navigate(Screens.LOGIN))
>>>>>>> ayuda
			});
		}
		if (this.name === 'ACCOUNT') {
			CONTAINER.addEventListener('click', () => {
<<<<<<< HEAD
				dispatch(navigate(Screens.LOGIN))

				console.log('Se hizo clic en el botón de "ACCOUNT"');
			});
		}
	}
}
=======
					this.toggleAccountButtons(CONTAINER);
					dispatch(navigate(Screens.PROFILE))
			});
	}
}

toggleAccountButtons(container: HTMLElement) {
	let accountButtons = container.querySelector('.account-buttons');

	if (!accountButtons) {
			accountButtons = document.createElement('div');
			accountButtons.classList.add('account-buttons');

	}
}
}

>>>>>>> ayuda
customElements.define('my-button', button);
