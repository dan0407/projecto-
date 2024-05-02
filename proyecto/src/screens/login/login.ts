import styles from './login.css';
export enum AttributeCard {
	'name' = 'name',
	'image' = 'image',
}

export class loginPge extends HTMLElement {
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
	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ` `;

			// Create the general div
			const generalDiv = document.createElement('div');
			generalDiv.id = 'general';

			const otro = document.createElement('div');
			otro.id = 'sing';

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

			const image = document.createElement('img')
			image.src= ''


			
			
			// Append the elements to build the structure
			inputsDiv.appendChild(emailLabel);
			inputsDiv.appendChild(emailInput);
			inputsDiv.appendChild(passwordLabel);
			inputsDiv.appendChild(passwordInput);
			inputsDiv.appendChild(loginButton);
			
			generalDiv.appendChild(inputsDiv);
			
			// Add the general div to the document body
			document.body.appendChild(generalDiv);
			this.shadowRoot.appendChild(generalDiv);

			
			const create = document.createElement('p');
			create.textContent= 'Don’t have an acount?';
			otro.appendChild(create);
	
			const up = document.createElement('p');
			up.textContent= 'Sign up';
			otro.appendChild(up);
	
			const sing = document.createElement('p');
			sing.textContent= 'Forget your password';
			this.shadowRoot.appendChild(sing);
	
			this.shadowRoot.appendChild(otro);
		}
		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}
customElements.define('login-page', loginPge);
