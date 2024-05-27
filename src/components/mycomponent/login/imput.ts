import styles from './input.css';
import { dispatch } from "../../../store/index";
import { navigate } from "../../../store/actions";
import { Screens } from "../../../types/trips";
import { iniciarSesion } from '../../../utils/firebase';
export enum AttributeCard {
	'name' = 'name',
	'image' = 'image',
}

class imputs extends HTMLElement {
	name?: string;
	image?: string;

	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
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

	handleLoginButton() {
		dispatch(navigate(Screens.DASHBOARD));
}
	handleSignupButton() {
		dispatch(navigate(Screens.SINGUP));
}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ` `;

			// Create the general div
			const generalDiv = document.createElement('div');
			generalDiv.id = 'general';

			// Create the inputs div
			const inputsDiv = document.createElement('div');
			inputsDiv.id = 'inputs';

			// Create the email label and input
			const emailLabel = document.createElement('label');
			emailLabel.setAttribute('for', 'email');
			emailLabel.textContent = 'Email address or user name';

			const emailInput = document.createElement('input');
			emailInput.type = 'email';
			emailInput.classList.add('email');

			// Create the password label, input, and button
			const passwordLabel = document.createElement('label');
			passwordLabel.setAttribute('for', 'Password');
			passwordLabel.textContent = 'Password';

			const passwordInput = document.createElement('input');
			passwordInput.type = 'password';
			passwordInput.id = 'password';

			// Create the login button
			const loginButton = document.createElement('button');
			loginButton.classList.add('button');
			loginButton.textContent = 'login';
			loginButton.style.fontFamily = 'Poppins, sans-serif';

			const image = document.createElement('img');
			image.src = '';
			
			const create = document.createElement('h4');
			create.classList.add('h4');
			create.textContent = 'Don’t have an acount?';
			
			const up = document.createElement('h5');
			up.textContent = 'Sign up';
			up.classList.add('h5');
			
			// Agregar evento de clic
			up.addEventListener('click', () => {
				up.addEventListener("click", this.handleSignupButton);
				
				
			});
			const sing = document.createElement('h6');
			sing.textContent = 'Forget your password';
			sing.classList.add('h6');
			
			const titulo = document.createElement('text');
			titulo.textContent = 'log in';
			titulo.classList.add('text');
			inputsDiv.appendChild(titulo);
			
			// Append the elements to build the structure
			inputsDiv.appendChild(emailLabel);
			inputsDiv.appendChild(emailInput);
			inputsDiv.appendChild(passwordLabel);
			inputsDiv.appendChild(passwordInput);
			inputsDiv.appendChild(loginButton);
			inputsDiv.appendChild(sing);
			inputsDiv.appendChild(create);
			inputsDiv.appendChild(up);
			
			generalDiv.appendChild(inputsDiv);
			
			// Add the general div to the document body
			document.body.appendChild(generalDiv);
			this.shadowRoot.appendChild(generalDiv);

			// Agregar evento de clic al botón de inicio de sesión
			loginButton.addEventListener("click", async () => {
				console.log('Se hizo clic en el botón de inicio de sesión');
				const usuario = await iniciarSesion(emailInput.value, passwordInput.value)
				console.log(`Inicio sesion: ${usuario}`)
			});
		
		}
		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}
customElements.define('my-imputs', imputs);
export default imputs;
