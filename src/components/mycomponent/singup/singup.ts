import styles from '../singup/singup.css';
import { dispatch } from "../../../store/index";
import { navigate } from "../../../store/actions";
import { Screens } from "../../../types/trips";

class singup extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}
	handleCreatButton() {
		dispatch(navigate(Screens.DASHBOARD));

}
handlelogButton() {
	dispatch(navigate(Screens.LOGIN));
}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ` `;

			// Create the general div
			const general = document.createElement('div');
			general.id = 'general';

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
			const createButton = document.createElement('button');
			createButton.classList.add('button');
			createButton.textContent = 'create account';

			// Agregar evento de clic al botón de "crear cuenta"
			createButton.addEventListener("click", this.handleCreatButton, );
				console.log('Se hizo clic en el botón de "crear cuenta"');



			// Add the general div to the document body
			document.body.appendChild(general);
			this.shadowRoot.appendChild(general);

			const create = document.createElement('h4');
			create.classList.add('h4');
			create.textContent = 'Already have an ccount?';

			const up = document.createElement('h5');
			up.textContent = 'Log in';
			up.classList.add('h5');
			up.addEventListener("click", this.handlelogButton, );
				console.log('Se hizo clic en el elemento h5');
			;

			const titulo = document.createElement('text');
			titulo.textContent = 'Create an account';
			titulo.classList.add('text');

			inputsDiv.appendChild(titulo);
			inputsDiv.appendChild(create);
			inputsDiv.appendChild(up);
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
			inputsDiv.appendChild(createButton);
			general.appendChild(inputsDiv);
		}

		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}

customElements.define('my-singup', singup);
export default singup;
