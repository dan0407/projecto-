import styles from './botones.css';
import '../../indexpadre';
import { addObserver, appState, dispatch } from "../../../store/index";
import { navigate } from "../../../store/actions";
import { Screens } from "../../../types/trips";
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
		console.log('Contructor');
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
		img.className= 'navbar-icons';
		CONTAINER.appendChild(img);

		if (this.name === 'HOME') {
			CONTAINER.addEventListener('click', () => {
				window.location.reload();
			});
		}
		if (this.name === 'MENU') {
			CONTAINER.addEventListener('click', () => {
				const suggestionContainer = this.ownerDocument
					.querySelector('app-container')
					?.shadowRoot?.querySelector('app-dashboard')
					?.shadowRoot?.querySelector('my-sidec')
					?.shadowRoot?.querySelector('section');

				console.log('Sugggestion');
				console.log(suggestionContainer);

				if (suggestionContainer?.className === 'hidden') {
					console.log('Hidden');
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
				console.log('Se hizo clic en el botón de "POST"');
			});
		}
		if (this.name === 'ACCOUNT') {
			CONTAINER.addEventListener('click', () => {
					this.toggleAccountButtons(CONTAINER);
					console.log('Se hizo clic en el botón de "ACCOUNT"');
			});
	}
}

toggleAccountButtons(container: HTMLElement) {
	let accountButtons = container.querySelector('.account-buttons');

	if (!accountButtons) {
			accountButtons = document.createElement('div');
			accountButtons.classList.add('account-buttons');

			const profileButton = this.createDropdownButton('Profile', 'profile-icon.png', Screens.PROFILE);


			accountButtons.appendChild(profileButton);
			container.appendChild(accountButtons);
	} else {
			accountButtons.remove();
	}
}

createDropdownButton(text: string, imagePath: string, screen: Screens) {
	const button = document.createElement('div');
	button.className = 'dropdown-button';

	const img = document.createElement('img');
	img.src = `../../../../imagenes/${imagePath}`;
	img.className = 'dropdown-icon';

	const span = document.createElement('span');
	span.textContent = text;

	button.appendChild(img);
	button.appendChild(span);

	button.addEventListener('click', () => {
			dispatch(navigate(screen));
			console.log(`Se hizo clic en el botón de "${text}"`);
	});

	return button;
}
}

customElements.define('my-button', button);
