import styles from '../login/input.css';

class singup extends HTMLElement {
	constructor() {
		super(); // always call super() first in the ctor.
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ` `;

			// Create the general div
			const general = document.createElement('div');
			general.id = 'general';

			const div = document.createElement('div');
			div.id = 'sing';

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

			const userLabel = document.createElement('label');
			userLabel.textContent = 'User';

			const userInput = document.createElement('input');
			userInput.type = 'text';
			userInput.id = 'user';

			const ageLabel = document.createElement('label');
			ageLabel.textContent = 'age';

			const ageInput = document.createElement('input');
			ageInput.type = 'text';
			ageInput.id = 'age';

			const BenchpressLabel = document.createElement('label');
			BenchpressLabel.textContent = 'Bench press';

			const BenchpressInput = document.createElement('input');
			BenchpressInput.type = 'text';
			BenchpressInput.id = 'Bench press';

			const DeadLiftLabel = document.createElement('label');
			DeadLiftLabel.textContent = 'DeadLift';

			const DeadLiftInput = document.createElement('input');
			DeadLiftInput.type = 'text';
			DeadLiftInput.id = 'DeadLift';

			const SquatLabel = document.createElement('label');
			SquatLabel.textContent = 'Squat';

			const SquatInput = document.createElement('input');
			SquatInput.type = 'text';
			SquatInput.id = 'Squat';

			// Create the login button
			const loginButton = document.createElement('button');
			loginButton.classList.add('button');
			loginButton.textContent = 'create account';
			loginButton.style.fontFamily = 'Poppins, sans-serif';

			const image = document.createElement('img');
			image.src = '';

			// Append the elements to build the structure
			inputsDiv.appendChild(userLabel);
			inputsDiv.appendChild(userInput);
			inputsDiv.appendChild(ageLabel);
			inputsDiv.appendChild(ageInput);
			inputsDiv.appendChild(BenchpressLabel);
			inputsDiv.appendChild(BenchpressInput);
			inputsDiv.appendChild(DeadLiftLabel);
			inputsDiv.appendChild(DeadLiftInput);
			inputsDiv.appendChild(SquatLabel);
			inputsDiv.appendChild(SquatInput);
			inputsDiv.appendChild(emailLabel);
			inputsDiv.appendChild(emailInput);
			inputsDiv.appendChild(passwordLabel);
			inputsDiv.appendChild(passwordInput);
			inputsDiv.appendChild(loginButton);

			general.appendChild(inputsDiv);

			// Add the general div to the document body
			document.body.appendChild(general);
			this.shadowRoot.appendChild(general);

			const create = document.createElement('p');
			create.textContent = 'Don’t have an acount?';
			div.appendChild(create);

			const up = document.createElement('p');
			up.textContent = 'Sign up';
			div.appendChild(up);

			const sing = document.createElement('p');
			sing.textContent = 'Forget your password';
			this.shadowRoot.appendChild(sing);

			this.shadowRoot.appendChild(div);
		}

		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}

customElements.define('my-singup', singup);
export default singup;
